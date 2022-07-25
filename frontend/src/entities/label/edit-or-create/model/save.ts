import { createLabelCallFx, updateLabelCallFx, type Label } from '@shared/api';
import { showNotification } from '@shared/lib/notifications';
import {
	createEvent,
	createStore,
	attach,
	sample,
	type Store,
	combine
} from 'effector-logger';
import { EditTypes } from './edit-types';


export interface SaveFactoryParams {
	action: EditTypes | string;
	_$label: Store<Label>;
	_$isEditing: Store<boolean>;
}

export const saveActionFactory = ({
	_$label,
	action,
	_$isEditing,
}: SaveFactoryParams) => {
	const _$action = createStore(action, { name: 'current LabelAction label' });
	const save = createEvent();
	const validated = createEvent();

	const stopEditing = createEvent('stopEditing');
	_$label.reset(stopEditing);
	_$isEditing.reset(stopEditing);

	const updateThisFx = attach({
		effect: updateLabelCallFx,
	});

	const createThisFx = attach({
		effect: createLabelCallFx,
	});

	sample({
		clock: validated,
		source: [_$label, _$action],
		fn: ([label]) => label as Label,
		filter: ([_, action]) => action === EditTypes.update,
		target: updateThisFx
	});

	sample({
		clock: validated,
		source: [_$label, _$action],
		fn: ([label]) => label as Label,
		filter: ([_, action]) => action === EditTypes.create,
		target: createThisFx
	});

	sample({
		clock: [updateThisFx.fail, createThisFx.fail],
		fn: (error) => ({
			type: 'error',
			heading: 'Error',
			description: error.error.message
		}),
		target: showNotification
	});

	const _$isSavingPending = combine(
		updateThisFx.pending,
		createThisFx.pending,
		(update, create) => update || create
	);

	sample({
		clock: [updateThisFx.done, createThisFx.done],
		target: stopEditing
	});

	sample({
		clock: save,
		source: [_$label, _$action],
		fn: ([label, action]) => ({ label: label as Label, action: action as string }),
		filter: ([label]) => (label as Label).title.length > 0 && (label as Label).color !== 'gray',
		target: validated
	});

	sample({
		clock: [updateThisFx.doneData, createThisFx.doneData],
		target: _$label,
	})

	sample({
		clock: updateThisFx.doneData,
		fn: (label) => ({
			type: 'success',
			heading: `Saved!`,
			description: `Label ${label.title} was successfully updated!`,
			delay: 2000
		}),
		target: showNotification
	});

	sample({
		clock: createThisFx.doneData,
		fn: (label) => ({
			type: 'success',
			heading: `Creted!`,
			description: `Label ${label.title} was successfully created!`,
			delay: 2000
		}),
		target: showNotification
	});

	sample({
		clock: save,
		source: _$label,
		fn: (label) => ({
			type: 'error',
			heading: 'Error',
			description: 'Label title is required'
		}),
		filter: (label, _) => label.title.length == 0,
		target: showNotification
	});

	sample({
		clock: save,
		source: _$label,
		fn: () => ({
			type: 'error',
			heading: 'Error',
			description: 'You should pick another color'
		}),
		filter: (label, _) => label.color == 'gray',
		target: showNotification
	});

	return {
		save: () => save(),
		stopEditing: () => stopEditing(),
		_$isSavingPending
	};
};

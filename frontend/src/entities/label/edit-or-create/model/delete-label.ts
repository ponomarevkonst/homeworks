import { showNotification } from '@shared/lib/notifications';
import {  attach, createEvent,createStore, sample } from 'effector-logger';
import { deleteLabelCallFx, type Label } from '@shared/api/label';

export const deleteLabelActionFactory = (label: Label) => {
	const _$label = createStore(label);
	const deleteLabel = createEvent('label delete requested');

	const deleteLabelFx = attach({
		effect: deleteLabelCallFx
	})

	sample({
		clock: deleteLabel,
		source: _$label,
		fn: (label) => label.id,
		target: deleteLabelFx
	});

	sample({
		clock: deleteLabelFx.fail,
		target: showNotification,
		fn: (error) => ({
			type: 'error',
			heading: 'Error',
			description: error.error.message
		})
	});

	return {
		deleteLabel: () =>
		confirm('Are you sure you want to delete this label?') ? deleteLabel() : null,
		_$deletingPending: deleteLabelFx.pending,
		_$deletingFailed: deleteLabelFx.fail
	};
};

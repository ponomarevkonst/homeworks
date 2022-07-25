import type { Label } from '@shared/api/label';
import { createEvent, createStore, sample, type Store } from 'effector-logger';

export const changeColorActionFactory = (_$label: Store<Label>) => {
	const requestEditing = createEvent();
	const startEditing = () => requestEditing();
	const setNewColor = createEvent<string>();

	const _$isEditing = createStore(false)
		.on(requestEditing, () => true)
		.reset(setNewColor);

	sample({
		clock: setNewColor,
		source: _$label,
		fn: (label, color) => ({ ...label, color }),
		target: _$label
	});

	return {
		_$isEditing,
		startEditing,
		setNewColor
	};
};

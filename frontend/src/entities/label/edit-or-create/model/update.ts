import type { Label } from '@shared/api/label';
import { createEvent, createStore } from 'effector';

export const labelUpdateFactory = (label: Label) => {
	const startEditing = createEvent();
	const _$isEditing = createStore(false).on(startEditing, () => true);
	const _$label = createStore(label);

	return {
		_$isEditing,
		_$label,
		startEditing: () => startEditing()
	};
};

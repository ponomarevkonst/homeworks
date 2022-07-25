import type { Label } from '@shared/api';
import { type Event, createStore } from 'effector-logger';

export const labelEditViewFactory = (label: Label, stopEditing: Event<void>) => {
	const _$label = createStore(label, { name: 'label' })
	const _$isEditing = createStore(false, { name: 'is editing' }).reset(stopEditing);

	return {
		_$isEditing,
		_$label
	};
};

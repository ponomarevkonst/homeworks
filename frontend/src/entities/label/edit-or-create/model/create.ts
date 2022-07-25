import type { Label } from '@shared/api/label';
import type { LabelPermissions } from '@shared/api/permissions/model';
import { showNotification } from '@shared/lib/notifications';
import { createEvent, sample, createStore, type Store } from 'effector';

export const labelCreateFactory = (label: Label, _$permissions: Store<LabelPermissions>) => {
    const _$label = createStore(label)
	const createLabel = createEvent<void>('createLabel');
	const finishCreatingRequested = createEvent<void>('finishLabelRequested');
	const _$isEditing = createStore(false, { name: 'is label creating' })
		.on(createLabel, () => true)
		.reset(finishCreatingRequested);

	sample({
		clock: createLabel,
		source: _$permissions,
		fn: () => true,
		target: _$isEditing,
		filter: (permissions) => permissions.create
	});

	sample({
		clock: createLabel,
		source: _$permissions,
		filter: (permissions) => !permissions.create,
		fn: () => ({
			type: 'error',
			heading: "You don't have permission to create label",
			description: 'Please contact your administrator'
		}),
		target: showNotification
	});


	return {
		createLabel: () => createLabel(),
        _$label,
		_$isEditing
	};
};

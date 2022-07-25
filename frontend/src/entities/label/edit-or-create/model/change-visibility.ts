import type { Label } from '@shared/api/label';
import { createEvent, sample, type Store } from 'effector';

export const changeVisibilityActionFactory = (_$label: Store<Label>) => {
	const changeVisibility = createEvent();
	const _$isVisible = _$label.map((label) => label.visible);

	sample({
		clock: changeVisibility,
		source: _$label,
		fn: (label) => ({ ...label, visible: !label.visible }),
		target: _$label
	});

	return {
		changeVisibility: () => changeVisibility(),
		_$isVisible
	};
};

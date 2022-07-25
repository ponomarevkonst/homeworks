import type { Label } from '@shared/api';
import { createEvent, sample, type Store } from 'effector';

export const contentEditableTitleFactory = (_$label: Store<Label>) => {
const updateTitle = createEvent<string>('update title');
	const _$title = _$label.map((label) => label.title);

	sample({
		clock: updateTitle,
		source: _$label,
		fn: (label, updateTitle) => ({
			...label,
			title: updateTitle
		}),
		target: _$label
	});

	const _$contentEditableTitle = {
		..._$title,
		set: (value: string) => updateTitle(value)
	};

	return _$contentEditableTitle;
};

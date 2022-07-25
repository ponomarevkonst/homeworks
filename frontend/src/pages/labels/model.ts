import {
	fetchAllLabelsFx,
	labelCategoriesUpdated,
	labelsUpdated,
	type Label,
	type LabelCategory
} from '@shared/api/label';
import { fetchAllLabelCategoriesFx } from '@shared/api/label/';
import { createStore, sample, createEvent } from 'effector-logger';

interface LabelGroupped {
	[key: string]: Label[];
}


export const _$labelCategories = createStore<LabelCategory[]>([]);
export const _$labelGroups = createStore<[string, Label[]][]>([]);
export const pageOpened = createEvent();

sample({
	clock: [pageOpened, labelsUpdated],
	target: fetchAllLabelsFx
});

sample({
	clock: [pageOpened, labelCategoriesUpdated],
	target: fetchAllLabelCategoriesFx
});

sample({
	clock: fetchAllLabelCategoriesFx.doneData,
	target: _$labelCategories
});

sample({
	source: fetchAllLabelsFx.doneData,
	fn: (labels) =>
		Object.entries(
			labels.reduce((acc, label) => {
				acc[label.color] = acc[label.color] || [];
				acc[label.color].push(label);
				return acc;
			}, {}) as LabelGroupped
		).sort((a, b) => a[0].localeCompare(b[0])),
	target: _$labelGroups
});


export const getTitleByColor = (categories: LabelCategory[], color: string) => categories.find((v) => v.color == color)?.title
export const sortLabels = (a: Label, b: Label) => a.title.localeCompare(b.title)
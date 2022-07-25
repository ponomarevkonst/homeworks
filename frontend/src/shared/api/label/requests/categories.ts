import { attach, createEffect, createStore, createEvent, sample } from 'effector-logger';
import { initLabelCategories } from '../mock';
import type { LabelCategory } from '../model';

export const labelCategoriesUpdated = createEvent();
const _$cache = createStore([] as LabelCategory[], { name: 'all label categories' });

const fetchAllLabelCategoriesBaseFx = createEffect({
	name: 'fetch all labels',
	handler: async (cache: LabelCategory[]): Promise<LabelCategory[]> => {
		if (cache.length !== 0) {
			return cache;
		}
		return initLabelCategories;
	}
});

export const fetchAllLabelCategoriesFx = attach({
	source: _$cache,
	effect: fetchAllLabelCategoriesBaseFx,
	name: 'fetch all label categories or get them from cache'
});

sample({
	clock: fetchAllLabelCategoriesFx.doneData,
	target: _$cache
});

export const updateLabelCategoryCallFx = createEffect({
	handler: async (category: LabelCategory) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return category;
	}
});

sample({
	clock: updateLabelCategoryCallFx.doneData,
	source: _$cache,
	fn: (store, label) => {
		const index = store.findIndex((l) => l.id === label.id);
		return [...store.slice(0, index), label, ...store.slice(index + 1)];
	},
	target: [_$cache, labelCategoriesUpdated]
});

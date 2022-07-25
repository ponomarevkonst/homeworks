import { attach, createEffect, createStore, createEvent, sample } from 'effector-logger';
import { initLabels } from '../mock';
import type { Label } from '../model';

const _$cache = createStore([] as Label[], { name: 'all labels' });
export const labelsUpdated = createEvent();

const fetchAllLabelsBaseFx = createEffect({
	name: 'fetch all labels',
	handler: async (cache: Label[]): Promise<Label[]> => {
		if (cache.length !== 0) {
			return cache;
		}
		return initLabels;
	}
});

export const fetchAllLabelsFx = attach({
	source: _$cache,
	effect: fetchAllLabelsBaseFx,
	name: 'fetch all labels or get it from cache'
});

sample({
	clock: fetchAllLabelsFx.doneData,
	target: _$cache
});

const fetchLabelByIdBaseFx = createEffect({
	name: 'fetch label by id',
	handler: async ({ cache, labelId }: { cache: Label[]; labelId: number }): Promise<Label> => {
		if (cache.length !== 0) {
			const label = cache.find((label) => label.id === labelId);
			if (label) {
				return label;
			}
		}
		return initLabels.find((label) => label.id === labelId);
	}
});

export const fetchLabelByIdFx = attach({
	source: _$cache,
	effect: fetchLabelByIdBaseFx,
	mapParams: (params: {labelId: number}, cache) => ({ labelId: params.labelId, cache }),
	name: 'fetch label by id or get it from cache'
});

export const deleteLabelCallFx = createEffect({
	name: 'delete label',
	handler: async (labelId: number): Promise<number> => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return labelId;
	}
});

sample({
	clock: deleteLabelCallFx.doneData,
	source: _$cache,
	fn: (store, labelId) => [...store.filter((l) => l.id !== labelId)],
	target: [_$cache, labelsUpdated]
});

export const createLabelCallFx = createEffect({
	name: 'create label fx',
	handler: async (label: Label) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// throw new Error('Something went wrong');
		return {
			...label,
			title: label.title.replace(/<\/?[^>]+(>|$)/g, ''),
			id: Math.floor(Math.random() * Math.floor(1000)),
			createdAt: new Date()
		} as Label;
	}
});

sample({
	clock: createLabelCallFx.doneData,
	source: _$cache,
	fn: (store, label) => [...store, label],
	target: [_$cache, labelsUpdated]
});

export const updateLabelCallFx = createEffect({
	name: 'update label',
	handler: async (label: Label) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return label;
	}
});

sample({
	clock: updateLabelCallFx.doneData,
	source: _$cache,
	fn: (store, label) => {
		const index = store.findIndex((l) => l.id === label.id);
		return [...store.slice(0, index), label, ...store.slice(index + 1)];
	},
	target: [_$cache, labelsUpdated]
});

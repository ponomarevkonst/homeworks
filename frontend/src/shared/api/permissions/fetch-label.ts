import { attach, createEffect, createStore, sample } from 'effector';
import type { LabelPermissions } from './model';

const _$cache = createStore({} as LabelPermissions, { name: 'label actions allowed for user' });

const fetchBaseFx = createEffect({
	name: 'fetch label permission for user',
	handler: async (cache: LabelPermissions): Promise<LabelPermissions> => {
		if (Object.keys(cache).length !== 0) {
			return cache;
		}
		const data = {
			delete: true,
			edit: true,
			create: true,
			changeVisibility: true,
			changeColor: true
		};
		return data;
	}
});

export const fetchlabelPermissionFx = attach({
	source: _$cache,
	effect: fetchBaseFx,
    name: 'fetch label permission for user or get it from cache'
});

sample({
    clock: fetchlabelPermissionFx.doneData,
    target: _$cache,
})
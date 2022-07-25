import { createEvent, createStore, sample, type Store } from 'effector';

export enum ViewType {
	LIST = 0,
	GRID = 1
}

const setViewType = createEvent<ViewType>();
export const setListView = () => setViewType(ViewType.LIST);
export const setGridView = () => setViewType(ViewType.GRID);

const _$viewType = createStore(ViewType.LIST);

sample({
	clock: setViewType,
	target: _$viewType
});

const isViewStoreFactory = (type: ViewType, defaultStore: Store<ViewType>) =>
	sample({
		clock: defaultStore,
		fn: (viewType) => viewType === type
	});

export const _$isGridView = isViewStoreFactory(ViewType.GRID, _$viewType);
export const _$isListView = isViewStoreFactory(ViewType.LIST, _$viewType);

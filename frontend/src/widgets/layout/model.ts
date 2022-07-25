import { historyUpdated } from '@entities/viewer';
import { createEvent, createStore, sample } from 'effector';

interface TopNavItemState {
	filterVisible: boolean;
	searchVisible: boolean;
	createVisible: boolean;
}

const defaultState: TopNavItemState = {
	filterVisible: false,
	searchVisible: false,
	createVisible: false
};

const _$topNavState = createStore(defaultState);

const changeVisibility = createEvent<Partial<TopNavItemState>>();

export const _$isFilterVisible = _$topNavState.map((state) => state.filterVisible);
export const _$isSearchVisible = _$topNavState.map((state) => state.searchVisible);
export const _$isCreateVisible = _$topNavState.map((state) => state.createVisible);

export const changeFilterVisibility = (state: boolean) =>
	changeVisibility({ filterVisible: state });
export const changeSearchVisibility = (state: boolean) =>
	changeVisibility({ searchVisible: state });
export const changeCreateVisibility = (state: boolean) =>
	changeVisibility({ createVisible: state });

// here we are watching for the changeVisibility event
// and changing the state of the topNavState store
// based on the event payload
sample({
	source: _$topNavState,
	clock: changeVisibility,
	fn: (store, payload) => ({ ...store, ...payload }),
	target: _$topNavState
});

// here we are hiding all of the top nav items
// when page is changed
sample({
	clock: historyUpdated,
	target: _$topNavState,
	fn: () => defaultState
});

export const createClicked = createEvent<void>();
export const filterClicked = createEvent<void>();

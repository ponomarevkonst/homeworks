import { tabsFactory } from '@features/tabs';
import { createEvent, createStore } from 'effector';

const showTabs = createEvent<boolean>();
export const _$isTabsShown = createStore(false).on(showTabs, (_, isShown) => isShown);

const tabs = [
	{
		id: 0,
		title: 'homework',
		isActive: true
	},
	{
		id: 1,
		title: 'details',
		isActive: false
	},
	{
		id: 3,
		title: 'related',
		isActive: false
	}
];

export const {_$tabs, setTab } = tabsFactory(tabs);
export const _$isHomework = _$tabs.map((t) => t[0].isActive);
export const _$isDetail = _$tabs.map((t) => t[1].isActive);

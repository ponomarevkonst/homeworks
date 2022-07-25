import { tabsFactory } from "@features/tabs";

const tabs = [
	{
		id: 0,
		title: 'tasks',
		isActive: true
	},
	{
		id: 1,
		title: 'details',
		isActive: false
	},
	{
		id: 3,
		title: 'used in',
		isActive: false
	}
];

export const {_$tabs, setTab } = tabsFactory(tabs);
export const _$isTasks = _$tabs.map((t) => t[0].isActive);
export const _$isDetail = _$tabs.map((t) => t[1].isActive);
export const _$isUsedIn = _$tabs.map((t) => t[2].isActive);
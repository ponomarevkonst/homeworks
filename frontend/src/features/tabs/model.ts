import { createEvent, createStore } from 'effector';

export interface Tab {
	id: number;
	title: string;
	isActive: boolean;
}

export const tabsFactory = (tabs: Tab[]) => {
	const setTab = createEvent<number>();
	const _$tabs = createStore(tabs).on(setTab, (_, tabId) =>
		tabs.map((t) => ({
			...t,
			isActive: t.id === tabId
		}))
	);

	return { 
        _$tabs, 
        setTab: (tabId: number) => setTab(tabId) 
    };
};

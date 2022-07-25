import { createEffect, createEvent, createStore, sample } from 'effector';

export interface Notification {
	id?: string;
	type: string;
	heading: string;
	description?: string;
	delay?: number;
}

export const _$notificationList = createStore([] as Notification[]);

// we need to add id to notification later
export const showNotification = createEvent<Notification>();

const delay = createEffect(async (delay: number = 2500) => {
	await new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
});

const addNotification = createEvent<Notification>();

sample({
	clock: showNotification,
	fn: (notification) => ({
		...notification,
		id: Math.random().toString()
	}),
	target: addNotification
});

sample({
	clock: addNotification,
	source: _$notificationList,
	fn: (store, notification) => [...store, notification],
	target: _$notificationList
});

sample({
	clock: addNotification,
	fn: (notification) => notification.delay,
	target: delay
});

sample({
	clock: delay.done,
	source: _$notificationList,
	target: _$notificationList,
	fn: (store) => store.slice(1)
});

export const removeNotification = createEvent<string>();

sample({
	clock: removeNotification,
	source: _$notificationList,
	fn: (store, payload) => store.filter((n) => n.id !== payload),
	target: _$notificationList
});

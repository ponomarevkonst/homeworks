import { createEvent, createStore, type Store } from 'effector';

export const createSvelteEffectorStore = <T>(
	initial: T
): Store<T> & { set?: (payload: T) => void } => {
	const update = createEvent<T>();
	const store = createStore(initial).on(update, (_, payload) => payload);

	return {
		...store,
		set: (payload: T) => update(payload)
	};
};

export const isRecent = (date: Date, compare: number) => {
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	return diff < compare;
};

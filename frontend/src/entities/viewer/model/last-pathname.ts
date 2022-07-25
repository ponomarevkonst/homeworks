import { createHistory } from '@tanyaisinmybed/effector-undo';
import { createEvent, createStore, sample } from 'effector';
import { historyUpdated } from './navigation';

const pathnameHistoryUpdated = createEvent<string>();
export const _$lastPathname = createStore('');

sample({
	clock: historyUpdated,
	target: [_$lastPathname, pathnameHistoryUpdated],
	fn: (update) => update.location.pathname
});

export const { undo: setPrevPathname } = createHistory({
	store: _$lastPathname,
	limit: 10,
	events: [pathnameHistoryUpdated]
});

import { appStarted } from '@shared/config';
import type { Effect, Event, Store } from 'effector';
import { attach, createEvent, createStore, sample } from 'effector';
import type { NavigationAction, NavigatorHistory, NavigatorLocation } from 'svelte-navigator';
import { createHistory } from 'svelte-navigator';

export const history = createHistory(window);

type HistoryUpdateParams = {
	location: NavigatorLocation;
	action: NavigationAction;
};
export const historyUpdated = createEvent<HistoryUpdateParams>();

export const createPathMatcher = <Match = unknown>(config: {
	path: string;
	clock?: Event<any> & Store<any> & Effect<any, any, Error>;
}) => {
	return sample({
		source: historyUpdated,
		clock: config.clock ?? historyUpdated,
		fn: (update: HistoryUpdateParams) => {
			const { location } = update;
			return location ? location.pathname.startsWith(config.path) : null;
		}
	});
};

// создаем стор под хистори, чтобы легче интегрироваться с эффектором
// в твоем случае хистори создан сразу в твоем владении
// поэтому нет нужды заводить отдельный attachHistory ивент
export const _$history = createStore<NavigatorHistory>(history);

// привязываем событие historyUpdated на обновления хистори
// привязывем в момент старта приложения, раньше смысла нет
_$history.watch(appStarted, (history) => {
	// хотим отреагировать еще и сразу в момент биндинга, поэтому дополнительно вызываем руками
	// historyUpdated({ location: history.location, action: history.action });
	history.listen((listener) => {
		historyUpdated({ location: listener.location, action: listener.action });
	});
});

// создаем на основе стора эффект для записи в хистори
// аналогичные эффекты для других операций
export const fxPush = attach({
	source: _$history,
	effect: (history, params: any) => {
		history.navigate(params);
	}
});

// Пример использования

// Слушаем матчинг на твой "/"

const rootMatched = createPathMatcher({
	path: '/'
});

rootMatched.watch(() => console.log('root matched'));

const testMatched = createPathMatcher({
	path: '/test'
});

testMatched.watch(() => console.info('test matched'));

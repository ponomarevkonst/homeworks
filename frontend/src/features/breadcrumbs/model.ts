import { historyUpdated } from '@entities/viewer';
import { createStore, sample } from 'effector';

interface Breadcrumb {
	text: string;
	href: string;
}

export const linksStore = createStore([] as Breadcrumb[]);

sample({
	clock: historyUpdated,
	target: linksStore,
	fn: (history) =>
		history.location.pathname
			.split('/')
			.slice(1)
			.reduce(
				(acc, text, index, arr): Breadcrumb[] => {
					const prev = acc[acc.length - 1];
					const href = prev.href + text + '/';
					// if last element of acc
					if (index === arr.length - 1 && acc.length > 2) {
						return [
							acc[0],
							{ text: '...', href: acc[acc.length - 2].href },
							acc[acc.length - 1],
							{ text, href }
						];
					}
					return [...acc, { href, text }];
				},
				[{ href: '/', text: 'home' }]
			)
});

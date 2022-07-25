import type { Favourite } from '@shared/api/favourites';
import { _$favourites } from '@shared/api/favourites';
import { createEvent, createStore, sample, type Store } from 'effector-logger';

export const addToFavourites = createEvent<Favourite>();
export const removeFromFavourites = createEvent<Favourite>();
export const isFavouritedFactory = (favourite: Favourite, _$favourites: Store<Favourite[]>) =>
	_$favourites.map((favourites) =>
		favourites.some((f) => f.id === favourite.id && f.type === favourite.type)
	);

sample({
	clock: addToFavourites,
	source: _$favourites,
	fn: (store, favourite) => [...store, favourite],
	target: _$favourites
});

sample({
	clock: removeFromFavourites,
	source: _$favourites,
	fn: (store, favourite) => {
		return store.filter((f) => f.id !== favourite.id);
	},
	target: _$favourites
});

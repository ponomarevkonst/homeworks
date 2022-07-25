import { createApi, createEvent, createStore } from 'effector';

export const toogleFavouritesMenu = createEvent();

export const _$isFavouritesMenuOpened = createStore(false).on(
	toogleFavouritesMenu,
	(state) => !state
);

import { createStore } from 'effector-logger';
import type { Favourite } from './model';

export const _$favourites = createStore([] as Favourite[]);
export * from './model';

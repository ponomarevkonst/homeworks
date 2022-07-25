import { writable } from 'svelte/store';

export const isSearchVisible = writable(false);

export const showSearch = () => isSearchVisible.set(true);
export const hideSearch = () => isSearchVisible.set(false);

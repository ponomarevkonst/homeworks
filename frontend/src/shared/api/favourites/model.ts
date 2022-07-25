export const favouriteTypes = ['course', 'task', 'homework', 'file'] as const;
export type FavouriteType = typeof favouriteTypes[number];

export interface Favourite {
	id: string;
	type: 'course' | 'task' | 'homework' | 'file';
	user_id?: string;
}

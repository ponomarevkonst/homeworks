import { createStore } from "effector";

export const _$labelPermissions = createStore({
	delete: true,
	edit: true,
	create: true,
	changeVisibility: true,
	changeColor: true
})
export interface BasePermissions {
	delete: boolean;
	edit: boolean;
	create: boolean;
}

export interface VisibilityPermissions {
	changeVisibility: boolean;
}

export interface ColorChangePermissions {
	changeColor: boolean;
}

export interface LabelPermissions
	extends BasePermissions,
		VisibilityPermissions,
		ColorChangePermissions {}

export type LabelCategoryPermissions = LabelPermissions

export interface Permissions {
	label: LabelPermissions;
	labelCategory: LabelCategoryPermissions;
}

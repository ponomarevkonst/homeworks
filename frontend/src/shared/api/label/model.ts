export const labelColors = ['red', 'yellow', 'cyan', 'green', 'blue', 'orange', 'purple', 'pink'] as const;
export type LabelColors = typeof labelColors[number];

export interface LabelCategory {
	id?: number;
	title: string;
	color: LabelColors;
}

export interface Label {
	id?: number;
	title: string;
	color: string;
	visible: boolean;
	createdAt: Date;
}

export interface LabelReferences {
	label: Label;
	tasks?: string[];
	homework?: string[];
}

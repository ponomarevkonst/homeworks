import type { Label } from '../label/model';
// list of file types
export const fileType = ['image', 'video', 'audio', 'pdf', 'other'] as const;
export type FileType = typeof fileType[number];

export enum Status {
	draft = 'draft',
	new = 'new',
	inProgress = 'inProgress',
	done = 'done'
}

export interface UploadedFile {
	id: string;
	title: string;
	url: string;
	type: FileType;
	labels?: Label[];
}

export interface Task {
	id: string;
	title: string;
	description: string;
	status: Status;
	school: string;
	body?: string;
	files?: UploadedFile[];
	labels?: Label[];
}

export interface Homework {
	id: string;
	title: string;
	description: string;
	status: Status;
	taskGroup: {
		id: string;
		time: string;
		tasks: Task[];
	}[];
	labels?: Label[];
}

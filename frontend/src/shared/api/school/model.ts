export interface School {
	code: string;
	title: string;
	color: string;
	logo: string;
}

export interface SchoolCategory {
	id: number;
	school: string;
	title: string;
}

export interface Course {
	id: number;
	code: string;
	title: string;
	slug: string;
	// status: 'draft' | ''
	category: number;
	children: Course[];
	// createdAt: Date;
	// updatedAt: Date;
	// createdBy: string;
}

export interface SchoolCategoryWithCourses extends SchoolCategory {
	courses: Course[];
}

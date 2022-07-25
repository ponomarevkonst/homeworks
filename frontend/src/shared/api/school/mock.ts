import connectLocalStorage from 'effector-localstorage';
import { combine, createStore } from 'effector';
import type { Course, School, SchoolCategory } from './model';
import { faker } from '@faker-js/faker';

const initSchoolList: School[] = [
	{
		code: 'eng',
		title: 'English',
		color: 'ffc0cb',
		logo: 'https://yopta.s3.amazonaws.com/media/school_logos/english_EnYHHLb.svg'
	},
	{
		code: 'fr',
		title: 'French',
		color: '003366',
		logo: 'https://yopta.s3.amazonaws.com/media/school_logos/french_eG15b6q.svg'
	},
	{
		code: 'de',
		title: 'German',
		color: 'ff9100',
		logo: 'https://yopta.s3.amazonaws.com/media/school_logos/deutsch_zxsdJAC.svg'
	}
];

const initSchoolCategoryList: SchoolCategory[] = [
	{
		id: 1,
		school: 'eng',
		title: 'IELTS'
	},
	{
		id: 2,
		school: 'eng',
		title: 'every day'
	},
	{
		id: 3,
		school: 'eng',
		title: 'three a week'
	},
	{
		id: 4,
		school: 'fr',
		title: 'every day'
	},
	{
		id: 5,
		school: 'de',
		title: 'every day'
	},
	{
		id: 6,
		school: 'de',
		title: 'three a week'
	},
	{
		id: 7,
		school: 'de',
		title: 'quasi gothe prufrung'
	}
];

export interface SchoolCategoryWithCourses extends SchoolCategory {
	courses: Course[];
}

const generateRandomCourses = (parentTitle: string, category: number, depth: number): Course[] => {
	if (depth === 2) {
		return [];
	}
	const courses: Course[] = [];
	for (let i = 0; i < faker.datatype.number({ min: 1, max: 2 }); i++) {
		const title = parentTitle + ' ' + faker.word.noun() + ' ';
		courses.push({
			id: faker.datatype.number({ min: 1, max: 100 }),
			code: faker.word.noun(),
			title: parentTitle + faker.word.noun(),
			slug: faker.word.noun(),
			category,
			children: generateRandomCourses(title, category, depth + 1)
		});
	}
	return courses;
};

const generateBasicCourses = (startId: number, category: number): Course[] => [
	{
		id: startId,
		code: 'a0',
		title: 'A0-A1',
		slug: 'a0-a1',
		category,
		children: generateRandomCourses('A0-A1', category, 0)
	},
	{
		id: startId + 1,
		code: 'a1',
		title: 'A1-A2',
		slug: 'a1-a2',
		category,
		children: generateRandomCourses('A1-A2', category, 0)
	},
	{
		id: startId + 2,
		code: 'b1',
		title: 'B1-B2',
		slug: 'b1-b2',
		category,
		children: []
	},
	{
		id: startId + 3,
		code: 'b2',
		title: 'B2-C1',
		slug: 'b2-c1',
		category,
		children: []
	},
	{
		id: startId + 4,
		code: 'c1',
		title: 'C1-C2',
		slug: 'c1-c2',
		category,
		children: []
	}
];

const initialCourses: Course[] = [
	{
		id: 1,
		code: 'adv',
		title: 'Advanced',
		slug: 'advanced',
		category: 1,
		children: generateRandomCourses('Advanced', 1, 0)
	},
	{
		id: 2,
		code: 'int',
		title: 'Intermediate',
		slug: 'intermediate',
		category: 1,
		children: generateRandomCourses('Intermediate', 1, 0)
	},
	{
		id: 3,
		code: 'preint',
		title: 'Pre-intermidiate',
		slug: 'pre-intermediate',
		category: 1,
		children: []
	},
	...generateBasicCourses(4, 2),
	...generateBasicCourses(8, 3),
	...generateBasicCourses(12, 4),
	...generateBasicCourses(16, 5),
	...generateBasicCourses(20, 6)
];

export const schoolsMock = createStore<School[]>(
	connectLocalStorage('schools').init(initSchoolList)
);
export const schoolCategoriesMock = createStore<SchoolCategory[]>(
	connectLocalStorage('categories').init(initSchoolCategoryList)
);
export const coursesMock = createStore<Course[]>(
	connectLocalStorage('courses').init(initialCourses)
);
export const getCategoryWithCoursesMock = (code: string) =>
	combine(
		schoolCategoriesMock,
		coursesMock,
		(categories, courses) =>
			categories
				.filter((category) => category.school === code)
				.map((category) => ({
					...category,
					courses: courses.filter((course) => course.category === category.id)
				}))
				.sort((a, b) => b.courses.length - a.courses.length) as SchoolCategoryWithCourses[]
	);

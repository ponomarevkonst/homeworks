import { readable, writable } from 'svelte/store';
import { coursesMock, getCategoryWithCoursesMock, schoolCategoriesMock, schoolsMock } from './mock';

const devOrTest = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
export const schools = devOrTest ? schoolsMock : writable([]);
export const schoolCategories = devOrTest ? schoolCategoriesMock : writable([]);
export const courses = devOrTest ? coursesMock : writable([]);
export const getCategoryWithCourses = devOrTest
	? getCategoryWithCoursesMock
	: (code: string) => readable([]);

export * from './model';

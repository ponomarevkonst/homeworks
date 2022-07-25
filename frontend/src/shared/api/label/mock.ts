import { createStore } from 'effector';
import type { Label, LabelCategory } from './model';

// yesterday date
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export const initLabelCategories = [
	{
		id: 1,
		title: 'grammar',
		color: 'red'
	},
	{
		id: 2,
		title: 'status',
		color: 'cyan'
	},
	{
		id: 3,
		title: 'category',
		color: 'green'
	},
	{
		id: 4,
		title: 'level',
		color: 'orange',
	},
	{
		id: 5,
		title: 'type',
		color: 'blue'
	},
	{
		id: 6,
		title: 'vocabullary',
		color: 'purple'
	},
	{
		id: 7,
		title: '',
		color: 'pink'
	},
	{
		id: 8,
		title: '',
		color: 'yellow'
	},


] as LabelCategory[];


export const initLabels: Label[] = [
	{
		id: 1,
		title: 'present perfect',
		color: 'red',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 2,
		title: 'past simple',
		color: 'red',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 3,
		title: 'conditionals',
		color: 'red',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 4,
		title: 'present continuous',
		color: 'red',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 5,
		title: 'nature',
		color: 'green',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 6,
		title: 'art',
		color: 'green',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 7,
		title: 'music',
		color: 'green',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 8,
		title: 'sports',
		color: 'green',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 9,
		title: 'food',
		color: 'green',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 10,
		title: 'travel',
		color: 'green',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 11,
		title: 'reading',
		color: 'blue',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 12,
		title: 'wrtiting',
		color: 'blue',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 13,
		title: 'A1',
		color: 'orange',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 14,
		title: 'A2',
		color: 'orange',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 15,
		title: 'B1',
		color: 'orange',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 16,
		title: 'B2',
		color: 'orange',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 17,
		title: 'C1',
		color: 'orange',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 18,
		title: 'C2',
		color: 'orange',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 19,
		title: 'collocations',
		color: 'purple',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 20,
		title: 'idioms',
		color: 'purple',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 21,
		title: 'phrasal verbs',
		color: 'purple',
		visible: true,
		createdAt: yesterday
	},
	{
		id: 22,
		title: 'done',
		color: 'cyan',
		visible: false,
		createdAt: yesterday
	},
	{
		id: 23,
		title: 'draft',
		color: 'cyan',
		visible: false,
		createdAt: yesterday
	}
];

export const _$labels = createStore(initLabels);

import { createStore } from 'effector';
import { faker } from '@faker-js/faker';
import { fileType, Status, type Homework, type Task, type UploadedFile } from './model';
import { initLabels } from '../label/mock';

const pdfUrls = [
	'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
	'http://www.africau.edu/images/default/sample.pdf',
	'https://www.clickdimensions.com/links/TestPDFfile.pdf',
	'https://www.orimi.com/pdf-test.pdf',
	'http://www.pdf995.com/samples/pdf.pdf',
	'https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
	'https://api.ngo.pl/media/get/108219'
];

const imagesUrls = [
	'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/png/dummy.png',
	'https://placekitten.com/g/200/300',
	'https://www.clickdimensions.com/links/TestPNGfile.png'
];

const audioUrls = [
	'https://www.javatpoint.com/oprweb/koyal.mp3',
	'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
];

const videoUrls = [
	'https://www.w3schools.com/html/mov_bbb.mp4',
	'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
];

const otherUrls = [
	'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/png/dummy.png',
	'https://placekitten.com/g/200/300',
	'https://www.clickdimensions.com/links/TestPNGfile.png'
];

const randomStatus = (): Status =>
	[Status.done, Status.draft, Status.new, Status.inProgress][Math.floor(Math.random() * 4)];

const generateFiles = (length: number): UploadedFile[] =>
	[...Array(length)].map((_, i) => {
		// random filetype
		const type = fileType[Math.floor(Math.random() * fileType.length)];
		let url = '';
		switch (type) {
			case 'pdf':
				url = pdfUrls[Math.floor(Math.random() * pdfUrls.length)];
				break;
			case 'image':
				url = imagesUrls[Math.floor(Math.random() * imagesUrls.length)];
				break;
			case 'audio':
				url = audioUrls[Math.floor(Math.random() * audioUrls.length)];
				break;
			case 'video':
				url = videoUrls[Math.floor(Math.random() * videoUrls.length)];
				break;
			case 'other':
				url = otherUrls[Math.floor(Math.random() * otherUrls.length)];
				break;
		}

		return {
			id: `${i + 1}`,
			title: `file${i + 1}`,
			url,
			type
		};
	});

const generateTasks = (length: number): Task[] =>
	[...Array(length)].map((_, i) => {
		const files = generateFiles(Math.floor(Math.random() * 5));
		const labels = initLabels.slice(
			Math.floor(Math.random() * initLabels.length),
			Math.floor(Math.random() * initLabels.length) + 1
		);
		const probability = Math.random();
		return {
			id: `${i + 1}`,
			title: `task ${i + 1}`,
			description: faker.lorem.sentence(),
			status: randomStatus(),
			school: faker.company.companyName(),
			body: probability > 0.9 ? faker.lorem.paragraph() : undefined,
			files: probability <= 0.9 ? files : undefined,
			labels
		};
	});

const generateTaskGroup = (length: number): Homework['taskGroup'] =>
	[...Array(length)].map((_, i) => {
		const tasks = generateTasks(Math.floor(Math.random() * 6));
		const time = ['0', '+5', '-5', '+10', '-10'][Math.floor(Math.random() * 5)];
		const randomString = Math.random().toString(36).substring(2, 15);
		return {
			id: randomString,
			time,
			tasks
		};
	});

const generateHomework = (length: number): Homework[] =>
	[...Array(length)].map((_, i) => {
		const labels = initLabels.slice(
			Math.floor(Math.random() * initLabels.length),
			Math.floor(Math.random() * initLabels.length) + 1
		);
		const randomString = Math.random().toString(36).substring(2, 15);
		const randomNumber = Math.floor(Math.random() * 6);
		return {
			id: randomString,
			status: randomStatus(),
			title: 'homework ' + (i + 1),
			description: faker.lorem.sentence(),
			taskGroup: generateTaskGroup(randomNumber),
			labels
		};
	});

export const tasks = createStore(generateTasks(10));
export const homework = createStore(generateHomework(10));
export const files = createStore(generateFiles(10));

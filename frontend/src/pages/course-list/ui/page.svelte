<script>
	import { getCategoryWithCourses } from '@shared/api';
	import { changeCreateVisibility } from '@widgets/layout';
	import Categories from './categories.svelte';
	export let schoolCode = '';
	changeCreateVisibility(true);
</script>

<div class="pt-4 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 sm:pt-4 md:pt-10">
	<div class="mx-2 sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">Courses</h1>
			<p class="mt-2 text-sm text-gray-700 dark:text-gray-200">
				A list of all the courses in this language including their category.
			</p>
		</div>
	</div>
	<Categories {schoolCode} />
</div>

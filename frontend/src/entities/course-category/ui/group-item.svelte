<script lang="ts">
	import type { SchoolCategoryWithCourses } from '@shared/api';
	export let title: string;
</script>

<div class="flex flex-col">
	<div
		class="rounded-t-md border border-gray-300 w-full bg-gray-50 dark:bg-gray-900 px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 sm:px-6 uppercase"
	>
		{title}
	</div>
	<div
		class="border-r rounded-b-md bg-white border-l border-gray-300 border-b divide-y divide-gray-300 "
	>
		<slot />
	</div>
</div>

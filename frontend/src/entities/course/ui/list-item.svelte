<script lang="ts">
	import type { Course } from '@shared/api/school';
	import { ChevronRightIcon } from '@shared/ui/icons';
	import { Link } from 'svelte-navigator';
	export let course: Course;
	const childrenCount = course.children.length;
</script>

<div draggable="true" class="grid grid-cols-[1fr_4.5rem] items-center">
	<div class="flex h-full">
		<Link
			to={String(course.id)}
			class="flex-1  w-full ml-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6"
		>
			{course.title}
			{#if childrenCount}
				<span class="bg-gray-200 ml-1 px-2 py-0.5 rounded-full">{childrenCount}</span>
			{/if}
		</Link>
	</div>
	<div class="justify-self-end relative pt-1 pr-4 text-right text-sm font-medium sm:pr-6">
		<slot />
	</div>
</div>

<script lang="ts">
	import { CategoryGroupItem } from '@entities/course-category';
	import { CourseListItem } from '@entities/course';
	import { getCategoryWithCourses, type SchoolCategoryWithCourses } from '@shared/api';
	import { LikeButton } from '@features/mark-as-favourite';
	export let schoolCode;
	$: categoryWithCourses = getCategoryWithCourses(schoolCode);
</script>

<div class="min-w-full py-2 align-middle grid sm:grid-cols-2 gap-4 mt-4">
	{#each $categoryWithCourses as category (category.id)}
		<CategoryGroupItem title={category.title}>
			{#if category.courses && category.courses?.length > 0}
				{#each category.courses as course (course.id)}
					<CourseListItem {course}>
						<LikeButton favourite={{ type: 'course', id: course.id }} />
					</CourseListItem>
				{/each}
			{/if}
		</CategoryGroupItem>
	{/each}
</div>

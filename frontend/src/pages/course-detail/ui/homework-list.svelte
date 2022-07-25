<script>
	import { HomeworkListItem } from '@entities/homework';
	import { SimpleLabel } from '@entities/label/with-points';
	import { faker } from '@faker-js/faker';
	import { LikeButton } from '@features/mark-as-favourite';
	import { onMount } from 'svelte';
	import { pageOpened, _$labels } from '../model/labels';
	onMount(() => pageOpened());
</script>

<section class="border rounded" aria-labelledby="gallery-heading">
	<table class="min-w-full divide-y divide-gray-300 dark:divide-gray-900 rounded">
		<tbody
			class="divide-y rounded overflow-y-auto divide-gray-200 dark:divide-gray-900 bg-white dark:bg-gray-800"
		>
			{#each [...Array(20)] as index}
				<HomeworkListItem>
					<span slot="actions">
						<LikeButton />
					</span>
					<div slot="labels" class="flex flex-wrap gap-1 pt-2 pr-4">
						{#each faker.helpers.arrayElements( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] ) as labelId}
							{#if $_$labels[labelId]}
								<SimpleLabel label={$_$labels[labelId]} />
							{/if}
						{/each}
					</div>
				</HomeworkListItem>
			{/each}
		</tbody>
	</table>
</section>

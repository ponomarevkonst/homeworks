<script>
	import { Tabs } from '@features/tabs';
	import { DetailTitle } from '@shared/ui/detail-title';
	import { _$tabs, setTab, _$isItems, _$isDetail } from '../model/tabs';
	import Items from './items.svelte';
</script>

<div class="max-w-7xl mx-auto px-2 pt-2 sm:px-6 lg:px-8 space-y-2">
	<DetailTitle title="Task 1">
		<span slot="description">
			present perfect (pre-existent past), and perfective indicative forms in French (present
			perfect progressive and perfective imperative), German (present continuous and perfective
			indicative), and English (perfective
		</span>

		<span slot="labels">
			<div class="flex flex-wrap gap-1 pt-2 pr-4">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
				>
					a2
				</span>
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
				>
					present perfect
				</span>
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
				>
					+
				</span>
			</div>
		</span>
	</DetailTitle>
	<Tabs {_$tabs} {setTab} />

	{#if $_$isItems}
		<Items />
	{/if}
</div>

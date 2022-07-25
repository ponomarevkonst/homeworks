<script lang="ts">
	import type { Store } from 'effector';
	import type { Tab } from './model';

	export let _$tabs: Store<Tab[]>;
	export let setTab: (id: number) => void;
</script>

<div class="relative z-0 rounded-md border flex divide-x divide-gray-200" aria-label="Tabs">
	{#each $_$tabs as tab, idx}
		<div
			class="{idx === 0 && 'rounded-l-md'} {idx === $_$tabs.length - 1 &&
				'rounded-r-md'} {tab.isActive
				? 'text-emerald-500 cursor-default'
				: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center capitalize focus:z-10"
			on:click={() => setTab(tab.id)}
		>
			<span>{tab.title}</span>
		</div>
	{/each}
</div>

<script lang="ts">
	import type { LabelCategory } from '@shared/api/label';
	import { modalFactory } from '@shared/lib/modal';
	import { CogIcon } from '@shared/ui/icons';
	import { SimpleCentredModal } from '@shared/ui/modal';
	import TitleChange from './title-change.svelte';
    export let categories: LabelCategory[];

	const { closeModal, openModal, _$isModalShown, _$allowCloseModal } = modalFactory();
</script>

<button
	on:click={() => openModal()}
	class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
>
	<CogIcon class="h-6 w-6 p-0.5" />
</button>

<SimpleCentredModal isModalShown={$_$isModalShown} close={() => closeModal()}>
	<div class="bg-white px-6">
		<div>
			<div class="mt-3 sm:mt-5 ">
				<h3 class="text-lg text-center leading-6 font-medium text-gray-900 border-b pb-3">
					Categories preferences
				</h3>
				<div class="flex flex-col gap-2 pt-2">
					{#each categories as category (category.id)}
						<TitleChange {_$allowCloseModal} {category} />
					{/each}
				</div>
			</div>
		</div>
		<div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
			{#if $_$allowCloseModal}
				<button
					on:click={() => closeModal()}
					type="button"
					class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:col-start-2 sm:text-sm"
					>Close</button
				>
			{:else}
				<button
					disabled
					type="button"
					class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:col-start-2 sm:text-sm"
					>saving...</button
				>
			{/if}
		</div>
	</div>
</SimpleCentredModal>

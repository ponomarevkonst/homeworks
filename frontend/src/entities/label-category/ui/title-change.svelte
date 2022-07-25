<script lang="ts">
	import type { LabelCategory } from '@shared/api/label';
	import { ErrorIcon, SolidRefreshRotateIcon } from '@shared/ui/icons';
	import SolidCheckCircle from '@shared/ui/icons/solid-check-circle.svelte';
	import type { Store } from 'effector';
	import { labelCategoryChangeFactory } from '../model';

	export let category: LabelCategory;
	export let _$allowCloseModal: Store<boolean>;
	const { _$isUpdating, _$isUpdated, changeTitle, _$isFailed } = labelCategoryChangeFactory({
		category,
		_$allowCloseModal
	});
</script>

<div>
	<div class="mt-1 relative rounded-md shadow-sm">
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
			<span>
				<div
					class="cursor-pointer rounded-full border border-{category.color}-300 p-3 bg-{category.color}-200"
				/></span
			>
		</div>
		<input
			on:change={(e) => changeTitle(e.currentTarget.value)}
			type="text"
			name="category"
			class="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-14 sm:text-sm border-gray-300 rounded-md"
			value={category.title}
			placeholder="category title"
		/>
		<div class="absolute inset-y-0 mr-2 right-0 flex items-center">
			{#if $_$isUpdating} <SolidRefreshRotateIcon class="w-5 h-5 text-gray-400" />{/if}
			{#if $_$isUpdated && !$_$isUpdating} <SolidCheckCircle class="w-5 h-5 text-gray-400" />{/if}
			{#if $_$isFailed} <ErrorIcon class="w-5 h-5 text-gray-400" />{/if}
		</div>
	</div>
</div>

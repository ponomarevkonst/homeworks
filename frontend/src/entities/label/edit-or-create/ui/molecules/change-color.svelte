<script lang="ts">
	import { labelColors,type Label } from '@shared/api/label';
	import type { Store } from 'effector';
	import { changeColorActionFactory,EditTypes,_$labelPermissions } from '../../model';

	export let action: EditTypes | string;
	export let _$label: Store<Label>;
		
	const { _$isEditing, setNewColor, startEditing } = changeColorActionFactory(_$label);
</script>

{#if action == EditTypes.create || $_$labelPermissions.changeColor}
	<span class="mr-2 flex">
		<span class="inline-flex gap-2">
			{#if $_$isEditing}
				{#each labelColors
					.filter((v) => v !== $_$label.color)
					.sort((a, b) => a.localeCompare(b)) as color}
					<span
						on:click={() => setNewColor(color)}
						class="cursor-pointer rounded-full border border-{color}-300 p-2 bg-{color}-200"
					/>
				{/each}
			{:else}
				<span
					on:click={startEditing}
					class="cursor-pointer rounded-full border border-{$_$label.color}-300 p-2 bg-{$_$label.color}-200"
				/>
			{/if}
		</span>
	</span>
{/if}

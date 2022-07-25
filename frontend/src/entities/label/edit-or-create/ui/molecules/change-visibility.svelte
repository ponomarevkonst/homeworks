<script lang="ts">
	import type { Label } from '@shared/api/label';
	import type { Store } from 'effector';
	import { EyeIcon, EyeOffIcon } from '@shared/ui/icons';
	import { EditTypes, changeVisibilityActionFactory, _$labelPermissions } from '../../model';

	export let _$label: Store<Label>;
	export let action: EditTypes | string;
	const { _$isVisible, changeVisibility } = changeVisibilityActionFactory(_$label);
</script>

{#if action == EditTypes.create || $_$labelPermissions.changeVisibility}
	<span class="mr-2 flex">
		<button on:click={changeVisibility}>
			{#if $_$isVisible}
				<EyeIcon class="h-4 w-4" />
			{:else}
				<EyeOffIcon class="h-4 w-4" />
			{/if}
		</button>
	</span>
{/if}

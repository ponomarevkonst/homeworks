<script lang="ts">
	import type { Label } from '@shared/api';
	import { SolidCheckCircleIcon,SolidRefreshIcon,XCircleIcon } from '@shared/ui/icons';
	import type { Store } from 'effector';
	import type { EditTypes } from '../../model';
	import { saveActionFactory } from '../../model';

	export let action: string | EditTypes;
	export let _$label: Store<Label>;
    export let _$isEditing: Store<boolean>;

	const { _$isSavingPending, save, stopEditing } = saveActionFactory({
		action,
		_$label,
        _$isEditing
	});
</script>

{#if $_$isSavingPending}
	<span class="ml-2 rotate"><SolidRefreshIcon class="h-4 w-4" /></span>
{:else}
	<button on:click={save}><SolidCheckCircleIcon class="ml-1.5 h-5 w-5" /></button>
	<button on:click={stopEditing}><XCircleIcon class="h-5 w-5" /></button>
{/if}

<style>
	.rotate {
		animation: rotate 1.5s linear infinite;
	}
	@keyframes rotate {
		to {
			transform: rotate(-360deg);
		}
	}
</style>

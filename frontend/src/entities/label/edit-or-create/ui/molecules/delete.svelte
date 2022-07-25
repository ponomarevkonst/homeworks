<script lang="ts">
	import type { Label } from '@shared/api';
	import { isRecent } from '@shared/lib/helpers';
	import { SolidRefreshIcon,TrashIcon } from '@shared/ui/icons';
	import { deleteLabelActionFactory, _$labelPermissions } from '../../model/';

	export let label: Label;

	const { deleteLabel, _$deletingPending, _$deletingFailed } = deleteLabelActionFactory(label);
	const isLessThan10min = (date: Date) => isRecent(date, 10 * 60 * 1000);
</script>

{#if $_$labelPermissions.delete || isLessThan10min(label.createdAt)}
	{#if $_$deletingPending}
		<span class="ml-2 rotate"><SolidRefreshIcon class="h-4 w-4" /></span>
	{:else}
		<button on:click={deleteLabel}>
			<TrashIcon class="h-4 w-4" />
		</button>
	{/if}
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


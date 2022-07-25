<script lang="ts">
	import type { Label } from '@shared/api';

	import { PlusSmIcon } from '@shared/ui/icons';
	import { EditTypes, labelCreateFactory, _$labelPermissions } from '../../model';
	import { Editing }  from '../organisms';
	export let color: string = 'gray';

	const label = { color, title: '', visible: true } as Label;
	const { _$isEditing, createLabel, _$label } = labelCreateFactory(label, _$labelPermissions);
</script>

<span
	class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-{color}-100 text-{color}-800 dark:bg-{color}-800 dark:text-{color}-100"
>
	{#if !$_$isEditing}
		<button on:click={createLabel}><PlusSmIcon /></button>
	{/if}

	{#if $_$isEditing}
		<Editing action={EditTypes.create} {_$label} {_$isEditing}  />
	{/if}
</span>

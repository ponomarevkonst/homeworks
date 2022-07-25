<script lang="ts">
	import type { Label } from '@shared/api';
	import { PencilIcon, EyeOffIcon } from '@shared/ui/icons';
	import { Editing }  from '../organisms';
	import { Delete } from '../molecules';
	import { EditTypes, labelUpdateFactory, _$labelPermissions } from '../../model';
	
	export let label: Label;
	const {_$isEditing, _$label, startEditing} = labelUpdateFactory(label)
</script>

<span
	class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-{$_$label.color}-100 text-{$_$label.color}-800 dark:bg-{$_$label.color}-800 dark:text-{$_$label.color}-100"
>
	<!-- not editing -->
	{#if !$_$isEditing}
		<!-- if label hidden -->
		{#if !$_$label.visible}
			<EyeOffIcon class="h-4 w-4 mr-1.5" />
		{/if}

		{$_$label.title}
		<span class="flex gap-1.5">
			{#if $_$labelPermissions.edit}
				<button on:click={startEditing}><PencilIcon class="ml-2 h-4 w-4" /></button>
			{/if}
			<Delete {label} />
		</span>
	{/if}

	<!-- editing -->
	{#if $_$isEditing}
		<Editing action={EditTypes.update} {_$isEditing} {_$label} />
	{/if}
</span>


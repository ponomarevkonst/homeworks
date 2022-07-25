<script lang="ts">
	import Preferences from './preferences.svelte';

	export let title: string = null;
</script>

<li class="bg-white border rounded-md px-6 py-4">
	<div class="flex flex-col divide-y">
		{#if title}
			<h3 class="capitalize pb-1 font-normal text-md">{title}</h3>
		{/if}
		<div class="flex flex-wrap gap-1 {title && 'pt-2'}">
			<slot />
		</div>
	</div>
</li>

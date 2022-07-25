<script lang="ts">
	import { ChevronDoubleLeftIcon } from '@shared/ui/icons';
	import { navigate } from 'svelte-navigator';
</script>

<div class="border-r flex pr-3 mr-4">
	<div class="flex items-center space-x-2 sm:ml-6 sm:space-x-6">
		<button
			on:click={() => navigate(-1)}
			class="flex p-1 rounded-full items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
		>
			<ChevronDoubleLeftIcon />
		</button>
	</div>
</div>

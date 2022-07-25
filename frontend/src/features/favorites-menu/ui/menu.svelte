<script>
	import { _$isFavouritesMenuOpened } from '@features/favorites-menu';
	import { slide } from 'svelte/transition';
	import MenuToogleButton from './menu-toogle-button.svelte';
</script>

{#if $_$isFavouritesMenuOpened}
	<div
		transition:slide={{ duration: 250 }}
		class="fixed bg-white w-full h-2/5 z-20 bottom-0 shadow-[0px_0_5px_rgba(0,0,0,0.1)] border-t"
	>
		<div class="relative flex justify-between border-b border-gray-200">
			<div class="abosulte bottom-0 flex items-center">
				<nav class="flex-1 ml-4 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
					<a
						href="#"
						aria-current="page"
						class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
						>Files</a
					>
					<a
						href="#"
						aria-current="page"
						class="border-emerald-500 text-emerald-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
						>Tasks</a
					>
					<a
						href="#"
						class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
						>Homework</a
					>
				</nav>
			</div>
			<div class="border-l px-3 flex items-center justify-center">
				<MenuToogleButton />
			</div>
		</div>
	</div>
{/if}

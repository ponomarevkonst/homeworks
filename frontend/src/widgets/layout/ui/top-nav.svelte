<script>
	import { SearchIcon } from '@shared/ui/icons';
	import { _$isCreateVisible, _$isSearchVisible, _$isFilterVisible, createClicked } from '../model';
	import BackButton from './back-button.svelte';
</script>

<header class="w-full fixed top-0 z-10">
	<div class="relative z-10 flex-shrink-0 h-14 bg-white border-gray-200 shadow-sm flex">
		<div class="flex-1 flex justify-between px-4 sm:px-6">
			<BackButton />
			<div class="flex-1 flex">
				{#if $_$isSearchVisible}
					<form class="w-full flex md:ml-0" action="#" method="GET">
						<label for="desktop-search-field" class="sr-only">Search all files</label>
						<label for="mobile-search-field" class="sr-only">Search all files</label>
						<div class="relative w-full text-gray-400 focus-within:text-gray-600">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
								<!-- Heroicon name: solid/search -->
								<SearchIcon class="flex-shrink-0 h-5 w-5" />
							</div>
							<input
								name="mobile-search-field"
								id="mobile-search-field"
								class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
								placeholder="Search"
								type="search"
							/>
							<input
								name="desktop-search-field"
								id="desktop-search-field"
								class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:file"
								placeholder="Search all files"
								type="search"
							/>
						</div>
					</form>
				{:else}
					<h1 class="w-full flex items-center uppercase tracking-widest font-bold text-2xl">
						yopta
					</h1>
				{/if}
			</div>
			{#if $_$isFilterVisible}
				<div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
					<button
						type="button"
						class="flex p-1 rounded-full items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					>
						<span class="sr-only">Open filters</span>
						<!-- Heroicon name: outline/menu-alt-2 -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
							/>
						</svg>
					</button>
				</div>
			{/if}
		</div>
		{#if $_$isCreateVisible}
			<div class="border-l px-3 flex items-center justify-center">
				<button
					on:click={() => createClicked()}
					type="button"
					class="flex p-1 rounded-full items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
					</svg></button
				>
			</div>
		{/if}
	</div>
</header>

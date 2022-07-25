<script lang="ts">
	import { Link } from 'svelte-navigator';
	import { linksStore } from './model';
</script>

<nav
	class="bg-white dark:bg-gray-700 w-full border-b border-gray-200 dark:border-gray-900 flex "
	aria-label="Breadcrumb"
>
	<ol class="max-w-screen-xl w-full mx-auto flex space-x-4 lg:px-8 overflow-y-auto">
		{#each $linksStore as { href, text }, idx}
			<li class="flex">
				<div class="flex items-center">
					{#if idx !== 0}
						<svg
							class="flex-shrink-0 w-6 h-full text-gray-200 dark:text-gray-800"
							viewBox="0 0 24 44"
							preserveAspectRatio="none"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
						</svg>
					{/if}
					<Link
						to={href}
						class="ml-4 text-sm font-medium text-gray-500 dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
					>
						{#if idx === 0}
							<!-- Heroicon name: solid/home -->
							<svg
								class="flex-shrink-0 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
								/>
							</svg>
						{:else}
							{text}
						{/if}
					</Link>
				</div>
			</li>
		{/each}
	</ol>
	<div class="border-l px-3 flex items-center justify-center">
		<slot />
	</div>
</nav>

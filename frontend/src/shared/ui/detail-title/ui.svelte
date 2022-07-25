<script>
	export let title;
</script>

<div class="pt-4 space-y-2 rounded-md bg-white p-4 border border-gray-200">
	<div class="flex justify-between">
		<div>
			<h2 class="text-lg font-medium text-gray-900">{title}</h2>
		</div>
		<button
			type="button"
			class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
		>
			<!-- Heroicon name: outline/heart -->
			<svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
			<span class="sr-only">Favorite</span>
		</button>
	</div>
	<div>
		<div class="mt-2 flex items-center justify-between">
			<p class="text-sm text-gray-500 italic"><slot name="description">Add a description.</slot></p>
		</div>
	</div>
	<div>
		<slot name="labels" />
	</div>
</div>

<script>
	import { LockOpenIcon } from '@shared/ui/icons';
</script>

<div class="space-y-2">
	<div class="rounded-md bg-white p-4 border border-gray-200">
		<h3 class="font-medium text-gray-900">Information</h3>
		<dl class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
			<div class="py-3 flex justify-between text-sm font-medium">
				<dt class="text-gray-500">Created by</dt>
				<dd class="text-gray-900">Marie Culver</dd>
			</div>

			<div class="py-3 flex justify-between text-sm font-medium">
				<dt class="text-gray-500">Created</dt>
				<dd class="text-gray-900">June 8, 2020</dd>
			</div>

			<div class="py-3 flex justify-between text-sm font-medium">
				<dt class="text-gray-500">Last modified</dt>
				<dd class="text-gray-900">June 8, 2020</dd>
			</div>
		</dl>
	</div>
	<div class="flex rounded-md bg-white p-4 border border-gray-200">
		<button
			type="button"
			class="flex-1 bg-emerald-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
			>Edit</button
		>
		<button
			type="button"
			class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
			><!-- Heroicon name: solid/pencil -->
			Clone</button
		>
		<button
			type="button"
			class="flex ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
			><LockOpenIcon />
		</button>
	</div>
	<div class="rounded-md bg-white p-4 border border-gray-200">
		<h3 class="font-medium text-gray-900">Used by</h3>
		<ul class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
			<li class="py-3 flex justify-between items-center">
				<div class="flex items-center">
					<img
						src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
						alt=""
						class="w-8 h-8 rounded-full"
					/>
					<p class="ml-4 text-sm font-medium text-gray-900">Aimee Douglas</p>
				</div>
				<button
					type="button"
					class="ml-6 bg-white rounded-md text-sm font-medium text-emerald-600 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					>Remove<span class="sr-only"> Aimee Douglas</span></button
				>
			</li>

			<li class="py-3 flex justify-between items-center">
				<div class="flex items-center">
					<img
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
						class="w-8 h-8 rounded-full"
					/>
					<p class="ml-4 text-sm font-medium text-gray-900">Andrea McMillan</p>
				</div>
				<button
					type="button"
					class="ml-6 bg-white rounded-md text-sm font-medium text-emerald-600 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					>Remove<span class="sr-only"> Andrea McMillan</span></button
				>
			</li>

			<li class="py-2 flex justify-between items-center">
				<button
					type="button"
					class="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
				>
					<span
						class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400"
					>
						<!-- Heroicon name: solid/plus-sm -->
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					<span class="ml-4 text-sm font-medium text-emerald-600 group-hover:text-emerald-500"
						>Share</span
					>
				</button>
			</li>
		</ul>
	</div>
</div>

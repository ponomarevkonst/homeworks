<script>
	import { PlayIcon } from '@shared/ui/icons';
</script>

<section class="bg-white border rounded p-3 divide-y space-y-4" aria-labelledby="gallery-heading">
	<div class="">
		<h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
		<ul
			class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			<li class="relative">
				<!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500" -->
				<div
					class="group file w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
				>
					<!-- Current: "", Default: "group-hover:opacity-75" -->
					<img
						src="https://7esl.com/wp-content/uploads/2018/05/Present-Perfect-Tense-3.jpg"
						alt=""
						class="object-scale-down pointer-events-none"
					/>
					<button type="button" class="absolute inset-0 focus:outline-none">
						<span class="sr-only">View details for IMG_4985.HEIC</span>
					</button>
				</div>
				<p class="mt-2 file text-sm font-medium text-gray-900 truncate pointer-events-none">
					picture1.png
				</p>
			</li>

			<li class="relative">
				<div><PlayIcon class="w-16 h-16 text-gray-100 absolute z-10 top-12 left-20" /></div>
				<!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500" -->
				<div
					class="group file w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
				>
					<!-- Current: "", Default: "group-hover:opacity-75" -->

					<img
						src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
						alt=""
						class="object-cover pointer-events-none blur-sm"
					/>
					<button type="button" class="absolute inset-0 focus:outline-none">
						<span class="sr-only">View details for IMG_4985.HEIC</span>
					</button>
				</div>
				<p class="mt-2 file text-sm font-medium text-gray-900 truncate pointer-events-none">
					video2
				</p>
				<p class="file text-sm font-medium text-gray-500 pointer-events-none">youtube</p>
			</li>

			<li class="relative">
				<!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500" -->
				<div
					class="group file w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
				>
					<!-- Current: "", Default: "group-hover:opacity-75" -->

					<img
						src="https://i.ibb.co/HVyY1Fb/Screen-Shot-2022-07-21-at-15-48-21.png"
						alt=""
						class="object-contain pointer-events-none"
					/>
					<button type="button" class="absolute inset-0 focus:outline-none">
						<span class="sr-only">View details for IMG_4985.HEIC</span>
					</button>
				</div>
				<p class="mt-2 file text-sm font-medium text-gray-900 truncate pointer-events-none">
					file1.pdf
				</p>
			</li>

			<li class="relative">
				<!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500" -->
				<div
					class="group file w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
				>
					<!-- Current: "", Default: "group-hover:opacity-75" -->

					<img
						src="https://i.ibb.co/HVyY1Fb/Screen-Shot-2022-07-21-at-15-48-21.png"
						alt=""
						class="object-contain pointer-events-none"
					/>
					<button type="button" class="absolute inset-0 focus:outline-none">
						<span class="sr-only">View details for IMG_4985.HEIC</span>
					</button>
				</div>
				<p class="mt-2 file text-sm font-medium text-gray-900 truncate pointer-events-none">
					file2.pdf
				</p>
			</li>

			<!-- More files... -->
		</ul>
	</div>

	<div class="flex justify-center items-center w-full pt-4">
		<label
			for="dropzone-file"
			class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
		>
			<div class="flex flex-col justify-center items-center pt-5 pb-6">
				<svg
					aria-hidden="true"
					class="mb-3 w-10 h-10 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
					/></svg
				>
				<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
					<span class="font-semibold">Click to upload</span> or drag and drop
				</p>
				<p class="text-xs text-gray-500 dark:text-gray-400">
					SVG, PNG, JPG or GIF (MAX. 800x400px)
				</p>
			</div>
			<input id="dropzone-file" type="file" class="hidden" />
		</label>
	</div>
</section>

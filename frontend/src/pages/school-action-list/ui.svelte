<script>
	import { Link } from 'svelte-navigator';
</script>

<div class="pt-2 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:pt-4 md:pt-10">
	<div
		class="dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-900 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
	>
		<div
			class="relative group rounded-t-lg sm:rounded-tr-none bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500"
		>
			<div>
				<span
					class="rounded-lg inline-flex p-3 bg-teal-50 dark:bg-teal-900 text-teal-700 dark:text-teal-200 ring-4 ring-white dark:ring-teal-900"
				>
					<!-- Heroicon name: outline/academic-cap -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M12 14l9-5-9-5-9 5 9 5z" />
						<path
							d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
						/>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium dark:text-gray-50">
					<Link to="courses" class="focus:outline-none">
						<!-- Extend touch target to entire panel -->
						<span class="absolute  inset-0" aria-hidden="true" />
						Courses
					</Link>
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
					A list of all the courses in this language including their category.
				</p>
			</div>
			<span
				class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
				aria-hidden="true"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
					/>
				</svg>
			</span>
		</div>

		<div
			class="sm:rounded-bl-lg relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500"
		>
			<div>
				<span
					class="rounded-lg inline-flex p-3 bg-rose-50 dark:bg-rose-900 text-rose-700 dark:text-rose-200 ring-4 ring-white dark:ring-rose-900"
				>
					<!-- Heroicon name: outline/receipt-refund -->
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
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium dark:text-gray-50">
					<Link to="homework" class="focus:outline-none">
						<!-- Extend touch target to entire panel -->
						<span class="absolute inset-0" aria-hidden="true" />
						Homework
					</Link>
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
					Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut
					at blanditiis et quo et molestiae.
				</p>
			</div>
			<span
				class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
				aria-hidden="true"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
					/>
				</svg>
			</span>
		</div>

		<div
			class="sm:rounded-tr-lg relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500"
		>
			<div>
				<span
					class="rounded-lg inline-flex p-3 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 ring-4 ring-white dark:ring-purple-900"
				>
					<!-- Heroicon name: outline/pencil -->
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
							d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						/>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium dark:text-gray-50">
					<Link to="tasks" class="focus:outline-none">
						<!-- Extend touch target to entire panel -->
						<span class="absolute inset-0" aria-hidden="true" />
						Tasks
					</Link>
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
					Carefully selected files that creates an awesome tasks for studnets. You can always pick
					them and create your own homework for your students.
				</p>
			</div>
			<span
				class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
				aria-hidden="true"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
					/>
				</svg>
			</span>
		</div>

		<div
			class="sm:rounded-tr-lg relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500"
		>
			<div>
				<span
					class="rounded-lg inline-flex p-3 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 ring-4 ring-white dark:ring-purple-900"
				>
					<!-- Heroicon name: outline/bookmark -->
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
							d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
						/>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium dark:text-gray-50">
					<Link to="labels" class="focus:outline-none">
						<!-- Extend touch target to entire panel -->
						<span class="absolute inset-0" aria-hidden="true" />
						Labels
					</Link>
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
					Carefully selected files that creates an awesome tasks for studnets. You can always pick
					them and create your own homework for your students.
				</p>
			</div>
			<span
				class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
				aria-hidden="true"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
					/>
				</svg>
			</span>
		</div>

		<div
			class="relative group rounded-b-lg bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500"
		>
			<div>
				<span
					class="rounded-lg inline-flex p-3 bg-sky-50 dark:bg-sky-900 text-sky-700 dark:text-sky-300 ring-4 ring-white dark:ring-sky-900"
				>
					<!-- Heroicon name: outline/paper-clip -->
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
							d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
						/>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium dark:text-gray-50">
					<Link to="files" class="focus:outline-none">
						<!-- Extend touch target to entire panel -->
						<span class="absolute inset-0" aria-hidden="true" />
						Files
					</Link>
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
					Foundation stone of each task. Don't hesitate to use them as building file for your task
					ideas.
				</p>
			</div>
			<span
				class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
				aria-hidden="true"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
					/>
				</svg>
			</span>
		</div>
	</div>
</div>

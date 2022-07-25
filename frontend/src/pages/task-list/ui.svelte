<script>
	import { HomeworkListItem } from '@entities/homework/ui';
	import { LikeButton } from '@features/mark-as-favourite';
</script>

<main class="flex-1">
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="md:mt-6 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-file min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div class="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg md:shadow">
						<main class="flex-1 overflow-y-auto">
							<div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
								<div class="flex">
									<h1 class="flex-1 text-2xl font-bold text-gray-900">Tasks</h1>
									<div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
										<button
											type="button"
											class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
										>
											<!-- Heroicon name: solid/view-list -->
											<svg
												class="h-5 w-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
											<span class="sr-only">Use list view</span>
										</button>
										<button
											type="button"
											class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
										>
											<!-- Heroicon name: solid/view-grid -->
											<svg
												class="h-5 w-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
												/>
											</svg>
											<span class="sr-only">Use grid view</span>
										</button>
									</div>
								</div>

								<!-- Tabs -->
								<div class="mt-3 sm:mt-2">
									<div class="sm:hidden">
										<label for="tabs" class="sr-only">Select a tab</label>
										<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
										<select
											id="tabs"
											name="tabs"
											class="file w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md"
										>
											<option selected>Recently Viewed</option>
											<option>Recently Added</option>
											<option>Favorited</option>
										</select>
									</div>
									<div class="hidden sm:file">
										<div class="flex items-center border-b border-gray-200">
											<nav class="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
												<!-- Current: "border-emerald-500 text-emerald-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
												<a
													href="#"
													aria-current="page"
													class="border-emerald-500 text-emerald-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
												>
													Recently Viewed
												</a>

												<a
													href="#"
													class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
												>
													Recently Added
												</a>

												<a
													href="#"
													class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
												>
													Favorited
												</a>
											</nav>
											<div class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
												<button
													type="button"
													class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
												>
													<!-- Heroicon name: solid/view-list -->
													<svg
														class="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
															clip-rule="evenodd"
														/>
													</svg>
													<span class="sr-only">Use list view</span>
												</button>
												<button
													type="button"
													class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
												>
													<!-- Heroicon name: solid/view-grid -->
													<svg
														class="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
														/>
													</svg>
													<span class="sr-only">Use grid view</span>
												</button>
											</div>
										</div>
									</div>
								</div>

								<!-- Gallery -->
								<section class="mt-8 pb-16" aria-labelledby="gallery-heading">
									<table class="min-w-full divide-y divide-gray-300 dark:divide-gray-900 rounded">
										<tbody
											class="divide-y rounded overflow-y-auto divide-gray-200 dark:divide-gray-900 bg-white dark:bg-gray-800"
										>
											<!-- <HomeworkListItem actions={LikeButton.bind({objAttributes: {liked: true}}) } /> -->
										</tbody>
									</table>
								</section>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

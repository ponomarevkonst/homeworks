<script>
	import { _$isListView, _$isGridView, setListView, setGridView } from '../model';

	const defaultButtonStyle = 'p-1.5 rounded-md text-gray-400 ';
	const activeButtonStyle = 'bg-white shadow-sm';
	const notActiveButtonStyle = 'hover:bg-white hover:shadow-sm';
</script>

<div class="bg-gray-100 p-0.5 rounded-lg flex items-center space-x-1">
	<button
		type="button"
		class={defaultButtonStyle + ($_$isListView ? activeButtonStyle : notActiveButtonStyle)}
		on:click={setListView}
		><svg
			class="h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			><path
				fill-rule="evenodd"
				d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/></svg
		> <span class="sr-only">Use list view</span></button
	>
	<button
		type="button"
		class={defaultButtonStyle + ($_$isGridView ? activeButtonStyle : notActiveButtonStyle)}
		on:click={setGridView}
		><svg
			class="h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			><path
				d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
			/></svg
		> <span class="sr-only">Use grid view</span></button
	>
</div>

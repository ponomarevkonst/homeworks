<script lang="ts">
	import { HomeIcon } from '@shared/ui/icons';
	import { Link, navigate } from 'svelte-navigator';
</script>

<div class="flex items-center space-x-2 sm:ml-6 sm:space-x-6">
	<Link
		to="/"
		class="flex p-1 rounded-full items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
	>
		<HomeIcon />
	</Link>
</div>

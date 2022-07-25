<script lang="ts">
	import type { School } from '@shared/api';
	import { Link } from 'svelte-navigator';
	export let school = {} as School;
</script>

<Link
	to={school.code}
	class="text-center bg-white dark:bg-gray-700 rounded-lg shadow cursor-pointer hover:shadow-md"
>
	<div class="flex flex-col p-8">
		<img class="w-32 h-32 flex-shrink-0 mx-auto" src={school.logo} alt="" />
	</div>
</Link>

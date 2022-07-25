<script>
	import { SchoolCard } from '@entities/school';
	import { schools } from '@shared/api';
</script>

<ul class="grid grid-cols-2 gap-2 px-2 pt-2">
	{#each $schools as school}
		<SchoolCard {school} />
	{/each}
</ul>

<script lang="ts">
	import type { Label } from '@shared/api';

	export let label: Label;
	// random number in range [0, 9]
	const random = Math.floor(Math.random() * 5);
</script>

<span
	class="text-xs inline-flex items-center px-2.5 py-0.5 rounded-full bg-{label.color}-100 text-{label.color}-800 dark:bg-{label.color}-800 dark:text-{label.color}-100"
>
	<span class="rounded-full bg-{label.color}-50 px-1.5 mr-2">{random}</span>
	{label.title}
</span>

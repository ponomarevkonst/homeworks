<script>
	import { labelColors } from '@shared/api';
	import { Link } from 'svelte-navigator';

	// random string length no more than 10
	const randomString = () => {
		const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		for (let i = 0; i < 10; i++) {
			result += chars[Math.floor(Math.random() * chars.length)];
		}
		return result;
	};

	// random color from labelColors
	const randomColor = () => {
		const keys = Object.keys(labelColors);
		return labelColors[keys[Math.floor(Math.random() * keys.length)]];
	};

	const generateBadges = () => {
		const badges = [];
		// random number in range 0 to 10
		const randomNumber = () => Math.floor(Math.random() * 10);
		for (let i = 0; i < randomNumber(); i++) {
			badges.push({
				label: randomString(),
				color: randomColor()
			});
		}
		return badges;
	};

	const badges = generateBadges();
</script>

<div
	class="col-span-1 flex flex-col justify-start bg-white rounded-lg shadow divide-y divide-gray-200"
>
	<div class="w-full flex items-center justify-between ">
		<div class="m-2 px-2 py-0.5 text-green-800 text-xs font-medium">1</div>
		<div class="flex-1 truncate p-3 border-x">
			<div class="flex items-center space-x-3">
				<h3 class="text-gray-900 text-sm truncate">Jane Cooper</h3>
			</div>
		</div>
		<div class="px-2 mt-1">
			<slot name="actions" />
		</div>
	</div>
	<div class="w-full flex flex-wrap items-center justify-between p-3 gap-2">
		{#each badges as badge}
			<span
				class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-{badge.color}-100 text-{badge.color}-800 dark:bg-{badge.color}-800 dark:text-{badge.color}-100"
			>
				{badge.label}
			</span>
		{/each}
	</div>
</div>

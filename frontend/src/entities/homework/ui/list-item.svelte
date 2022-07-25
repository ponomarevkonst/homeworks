<script>
	import { Link } from 'svelte-navigator';
	const schoolCode = window.location.pathname.split('/')[1]
</script>

<tr class="">
	<td class="rounded-tl-md whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
		<Link to="/{schoolCode}/homework/ss">
			<div class="flex items-center">
				<div class="h-10 w-10 flex-shrink-0">
					<div
						class="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-green-300 text-white text-lg rounded-full"
					>
						{1}
					</div>
				</div>
				<div class="ml-4">
					<div class="font-medium text-gray-900 dark:text-gray-200">Homework title</div>
					<div class="flex flex-wrap gap-1 pt-2 pr-4">
						<slot name="labels" />
					</div>
				</div>
			</div>
		</Link>
	</td>
	<td
		class="rounded-tr-md relative whitespace-nowrap text-right text-sm font-medium sm:pr-6"
	>
		<slot name="actions" />
	</td>
</tr>

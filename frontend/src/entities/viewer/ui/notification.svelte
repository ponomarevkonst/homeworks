<script lang="ts">
	import { SuccessIcon, ErrorIcon, InfoIcon, WarningIcon } from '@shared/ui/icons';
	import { removeNotification, type Notification } from '@shared/lib/notifications';

	export let notification = {} as Notification;

	const handleClose = () => {
		removeNotification(notification.id);
	};
</script>

<div
	class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
>
	<div class="p-4">
		<div class="flex items-start">
			<div class="flex-shrink-0">
				{#if notification.type == 'success'}
					<SuccessIcon />
				{:else if notification.type == 'error'}
					<ErrorIcon />
				{:else if notification.type == 'info'}
					<InfoIcon />
				{:else if notification.type == 'warning'}
					<WarningIcon class="h-6 w-6 text-orange-400" />
				{/if}
			</div>
			<div class="ml-3 w-0 flex-1 pt-0.5">
				<p class="text-sm font-medium text-gray-900">{notification.heading}</p>
				<p class="mt-1 text-sm text-gray-500">{notification.description}</p>
			</div>
			<div class="ml-4 flex-shrink-0 flex">
				<button
					class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					on:click={handleClose}
				>
					<span class="sr-only">Close</span>
					<!-- Heroicon name: solid/x -->
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>

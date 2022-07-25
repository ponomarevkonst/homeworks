<script>
	import { Notification } from '@entities/viewer';
	import { _$notificationList } from '@shared/lib/notifications';
</script>

<div class="fixed bottom-14 left-0 z-20 w-full flex flex-col gap-2 items-center">
	{#each $_$notificationList as notification}
		<Notification {notification} />
	{/each}
</div>

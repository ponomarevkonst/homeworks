<script>
	import Notifications from './notifications.svelte';
	import Router from './router.svelte';
</script>

<Notifications />
<Router>
	<slot />
</Router>

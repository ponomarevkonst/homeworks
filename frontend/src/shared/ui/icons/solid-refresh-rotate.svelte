<script>
	import SolidRefresh from './solid-refresh.svelte';
    let clazz = 'h-6 w-6';
	export { clazz as class };
</script>

<span class="rotate">
	<SolidRefresh class={clazz} />
</span>

<style>
	.rotate {
		animation: rotate 1.5s linear infinite;
	}
	@keyframes rotate {
		to {
			transform: rotate(-360deg);
		}
	}
</style>

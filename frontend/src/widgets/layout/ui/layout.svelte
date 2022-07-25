<script lang="ts">
	import { FavouritesMenu, FavouritesMenuButton } from '@features/favorites-menu';
	import { SearchCommandPalette } from '@features/search';
	import { TransitionContainer } from '@shared/lib/router';
	import { HomeSolidIcon } from '@shared/ui/icons';
	import BackButton from './back-button.svelte';
	import HomeButton from './home-button.svelte';
	import TopNav from './top-nav.svelte';
</script>

<SearchCommandPalette />
<FavouritesMenu />

<TopNav />
<div
	class="bottom-0 flex justify-between bg-white left-0 z-10 fixed w-full border-t shadow-[0px_0_5px_rgba(0,0,0,0.1)]"
>
	<div class="border-r"><div class="p-3"><HomeButton /></div></div>
	<div class="border-l"><div class="p-3"><FavouritesMenuButton /></div></div>
</div>

<TransitionContainer>
	<slot />
</TransitionContainer>

<style>
	:global(body) {
		padding-top: 3.5rem;
		padding-bottom: 4.5rem;
	}
</style>

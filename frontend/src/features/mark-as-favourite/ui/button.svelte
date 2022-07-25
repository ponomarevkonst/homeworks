<script lang="ts">
	import { _$favourites, type Favourite } from '@shared/api/favourites';
	import { LikedIcon, NotLikedIcon } from '@shared/ui/icons';

	import { isFavouritedFactory } from '../model';
	export let favourite: Favourite;

	const _$isFavourited = isFavouritedFactory(favourite, _$favourites);
</script>

<button
	class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
>
	{#if $_$isFavourited}
		<LikedIcon />
	{:else}
		<NotLikedIcon />
	{/if}
</button>

<script>
	import { HomeworkDetail, HomeworkTitle } from '@entities/homework';

	import { Tabs } from '@features/tabs';
	import { _$tabs, setTab, _$isTasks, _$isDetail } from '../model/tabs';
</script>

<div class="max-w-7xl mx-auto px-2 pt-2 sm:px-6 lg:px-8 space-y-2">
	<HomeworkTitle />
	<Tabs {_$tabs} {setTab} />

	{#if $_$isTasks}{/if}

	{#if $_$isDetail}
		<HomeworkDetail />
	{/if}
</div>

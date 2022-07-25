<script>
	import { CourseDetail, CourseTitle } from '@entities/course';
	import { _$history } from '@entities/viewer';
	import { Tabs } from '@features/tabs';
	import { changeSearchVisibility } from '@widgets/layout';
	import { _$isDetail, _$isHomework, _$tabs, setTab } from '../model/tabs';

	import HomeworkList from './homework-list.svelte';
	changeSearchVisibility(true);
</script>

<div class="max-w-7xl mx-auto px-2 pt-2 sm:px-6 lg:px-8 space-y-2">
	<CourseTitle />
	<Tabs {_$tabs} {setTab} />

	{#if $_$isHomework}
		<HomeworkList />
	{/if}

	{#if $_$isDetail}
		<CourseDetail />
	{/if}
</div>

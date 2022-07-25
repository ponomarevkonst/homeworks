<script lang="ts">
	import { LabelCategoryListItem, LabelCategoryPreferences } from '@entities/label-category';
	import { CreateLabel, UpdateLabel } from '@entities/label/edit-or-create';
	import { pageOpened, _$labelCategories, _$labelGroups, getTitleByColor, sortLabels } from '../model';
	pageOpened();
</script>

<ul class="space-y-3 p-2">
	{#each $_$labelGroups as [color, labels]}
		<LabelCategoryListItem title={getTitleByColor($_$labelCategories, color)}>
			{#each labels.sort(sortLabels) as label (label.id)}
				<UpdateLabel {label} />
			{/each}
			<CreateLabel {color} />
		</LabelCategoryListItem>
	{/each}
	<LabelCategoryListItem>
		<CreateLabel />
	</LabelCategoryListItem>
	<LabelCategoryListItem>
		<LabelCategoryPreferences categories={$_$labelCategories} />
	</LabelCategoryListItem>
</ul>

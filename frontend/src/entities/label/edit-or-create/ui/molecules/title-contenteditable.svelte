<script lang="ts">
	import type { Label } from '@shared/api/label';

	import type { Store } from 'effector';

	import { contentEditableTitleFactory } from '../../model';

	export let _$label: Store<Label>;
	const _$contentEditableInput = contentEditableTitleFactory(_$label);
</script>

<span
	contenteditable
	class="px-4 rounded-full bg-white"
	bind:textContent={$_$contentEditableInput}
/>
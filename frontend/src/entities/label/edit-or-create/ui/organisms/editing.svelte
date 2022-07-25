<script lang="ts">
	import type { Label } from '@shared/api';
	import type { Store } from 'effector';
	import type { EditTypes } from '../../model';
	import { _$labelPermissions } from '../../model';

	import { ChangeColor, ChangeVisibility, TitleContenteditable, Save } from '../molecules';

	export let action: EditTypes | string;
	export let _$label: Store<Label>;
	export let _$isEditing: Store<boolean>;
</script>

<ChangeColor {action} {_$label} />
<ChangeVisibility {action} {_$label} />
<TitleContenteditable {_$label} />
<Save {action} {_$label} {_$isEditing} />

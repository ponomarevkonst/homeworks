import type { Label } from '@shared/api';
import type { Store } from 'effector';

export const getLabel = (labelId: number, _$labels: Store<Label[]>) =>
	_$labels.map((labels) => labels.find((label) => label.id === labelId));

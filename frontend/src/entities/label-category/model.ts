import { updateLabelCategoryCallFx, type LabelCategory } from '@shared/api/label';
import { attach, createEvent, createStore, sample, type Store } from 'effector';
import { debounce } from 'patronum/debounce';

interface Params {
	category: LabelCategory;
	_$allowCloseModal: Store<boolean>;
}

export const labelCategoryChangeFactory = ({ category, _$allowCloseModal }: Params) => {
	const changeTitle = createEvent<string>();
	const _$category = createStore(category);
	const _$isUpdated = createStore(false);
	const _$isFailed = createStore(false);

	const _$isUpdating = createStore(false).on(changeTitle, () => true);

	const updateLabelCategoryFx = attach({
		effect: updateLabelCategoryCallFx
	});

	sample({
		clock: changeTitle,
		fn: () => false,
		target: _$allowCloseModal
	});

	sample({
		clock: changeTitle,
		source: _$category,
		fn: (labelCategory, title) => ({ ...labelCategory, title }),
		target: updateLabelCategoryFx
	});

	sample({
		clock: updateLabelCategoryFx.doneData,
		target: _$category
	});

	sample({
		source: updateLabelCategoryFx.done,
		target: _$isUpdating,
		fn: () => false
	});

	sample({
		source: updateLabelCategoryFx.done,
		target: _$allowCloseModal,
		fn: () => true
	});

	sample({
		source: updateLabelCategoryFx.done,
		target: _$isUpdated,
		fn: () => true
	});

	sample({
		source: updateLabelCategoryFx.fail,
		target: _$isFailed,
		fn: () => true
	});

	return {
		_$isUpdating,
		_$isUpdated,
		_$isFailed,
		changeTitle
	};
};

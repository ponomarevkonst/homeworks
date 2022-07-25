import { fetchAllLabelsFx, labelsUpdated, type Label } from '@shared/api/label';
import { createStore, sample, createEvent } from 'effector-logger';


export const _$labels = createStore([] as Label[], { name: 'labels' });
export const pageOpened = createEvent();

sample({
	clock: [pageOpened, labelsUpdated],
	target: fetchAllLabelsFx,
})


sample({
	source: fetchAllLabelsFx.doneData,
	target: _$labels
});


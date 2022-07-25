import { createEvent, createStore, sample } from 'effector';

export const modalFactory = () => {
	const openModal = createEvent();
	const closeModal = createEvent();
	const _$isModalShown = createStore(false)
		.on(openModal, () => true)

    const _$allowCloseModal = createStore(true)

    sample({
        clock: closeModal,
        source: _$allowCloseModal,
        filter: (allowCloseModal) => allowCloseModal,
        fn: () => false,
        target: _$isModalShown
    })

    return {
        openModal,
        closeModal,
        _$isModalShown,
        _$allowCloseModal
    }
};

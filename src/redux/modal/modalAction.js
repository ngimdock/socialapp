import { SHOW_AVAILABLE_MODAL, HIDE_AVAILABLE_MODAL } from '../types'

const showAvailableModal = () => {
	return {
		type: SHOW_AVAILABLE_MODAL
	}
}

const hideAvailableModal = () => {
	return {
		type: HIDE_AVAILABLE_MODAL
	}
}

export {
	showAvailableModal,
	hideAvailableModal
}
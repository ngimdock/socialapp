import { SHOW_AVAILABLE_MODAL, HIDE_AVAILABLE_MODAL } from '../types'

const initialState = {
	show: false
}

const modalReducer = (state = initialState, action) => {
	switch(action.type){
		case SHOW_AVAILABLE_MODAL:
			return {
				...state,
				show: true
			}
		case HIDE_AVAILABLE_MODAL:
			return {
				...state,
				show: false
			}
		default:
			return state
	}
}

export default modalReducer
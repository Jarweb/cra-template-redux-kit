
const initialState = {
	count: 0
}	

export default function counter (state = initialState, action) {
	switch (action.type) {
		case 'counter/inc':
			return {
				...state,
				count: action.payload
			}
		case 'counter/dec':
			return {
				...state,
				count: action.payload
			}
		default:
			return state
	}
}
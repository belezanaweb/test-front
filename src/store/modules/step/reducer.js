export default function cart(state = 1, action) {
	switch (action.type) {
		case 'CHANGE_STEP':
			return action.newStep;
		default:
			return state;
	}
}

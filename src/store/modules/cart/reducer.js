export default function cart(state = {}, action) {
	switch (action.type) {
		case 'SET_CART':
			return action.cart;
		default:
			return state;
	}
}

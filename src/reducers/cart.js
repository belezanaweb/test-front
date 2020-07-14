const inicialState = {
    cart: null
}

const carts = (state = inicialState, action) => {
    switch(action.type) {
        case "SET_CART": {
            return {...state, cart: action.payload.cart}
        }

        default:
            return state

    }
}

export default carts
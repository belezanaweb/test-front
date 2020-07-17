const inicialState = {
    cart: null,
    cardInfo: null
}

const carts = (state = inicialState, action) => {
    switch (action.type) {
        case "SET_CART": {
            return { ...state, cart: action.payload.cart }
        }

        case "SET_CREDIT_CARD": {
            return { ...state, cardInfo: action.payload.cardInfo }
        }

        default:
            return state

    }
}

export default carts
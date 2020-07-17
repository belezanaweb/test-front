const inicialState = {
    cart: null,
    cardInfo: null
}

const carts = (state = inicialState, action) => {
    switch(action.type) {
        case "SET_CART": {
            return {...state, cart: action.payload.cart}
        }

        case "SET_CREDIT_CARD": {
            console.log("REDUCER")
            console.log("PAYLOAD",action.payload.cardInfo)
            return {...state, cardInfo: action.payload.cardInfo}
        }

        default:
            return state

    }
}

export default carts
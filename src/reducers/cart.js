export const initialStateCart = {
    cart: {}
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "SET_CART":
            return { ...state, cart: action.cart };
        default:
            return state;
    };
};
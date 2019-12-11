let defaultState = {
    items: ''
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === 'CHANGE_DATA') {
        return {
            ...state,
            items: action.payload.items,
            subTotal: action.payload.subTotal,
            shippingTotal: action.payload.shippingTotal,
            discount: action.payload.discount,
            total: action.payload.total
        }
    } if (action.type === 'ADD_CARD') {
        return { ...state, cardNumber: action.payload };
    } if (action.type === 'ADD_NAME') {
        return { ...state, cardName: action.payload };
    } if (action.type === 'ADD_DATECARD') {
        return { ...state, cardDate: action.payload };
    } if (action.type === 'ADD_CVV') {
        return { ...state, cardCvv: action.payload };
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;
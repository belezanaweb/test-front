let defaultState = {
    items: '',
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: ''
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === 'CHANGE_DATA') {
        return {
            ...state,
            items: action.data.items,
            subTotal: action.data.subTotal,
            shippingTotal: action.data.shippingTotal,
            discount: action.data.discount,
            total: action.data.total
        }
    } if (action.type === 'ADD_CARD') {
        return {...state, cardNumber: action.payload };
    } if (action.type === 'ADD_NAME') {
        return {...state, cardName: action.payload };
    } if (action.type === 'ADD_DATECARD') {
        return {...state, cardDate: action.payload };
    } if (action.type === 'ADD_CVV') {
        return {...state, cardCvv: action.payload };
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;
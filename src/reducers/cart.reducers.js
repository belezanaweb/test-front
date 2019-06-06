
//---------------------------------
//  Cart Reducer
//
//  We can set the variables of cart here

// Actions to comunicate with this reducer
import {
    SET_CART, LOADING_CART
} from '../actions/types';

const INITIAL_STATE = {
    discount: 0,
    id: null,
    items: [],
    shippingTotal: 0,
    subTotal: 0,
    total: 0,
    loading_cart: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOADING_CART:
            return { ...state, loading_cart: action.payload }
        case SET_CART: 
            return { 
                ...state, 
                discount: action.payload.discount,
                id: action.payload.id,
                items: action.payload.items,
                shippingTotal: action.payload.shippingTotal,
                subTotal: action.payload.subTotal,
                total: action.payload.total,
            }
        default:
            return state;
    }

}

import React, { useReducer } from 'react';

import CartContext from '../contexts/CartContext';
import { initialStateCart, cartReducer } from '../reducers/cart';

const CartProvider = (props) => {
    const [stateCart, dispatchCart] = useReducer(cartReducer, initialStateCart);
    return (
        <CartContext.Provider value={{ cart: stateCart.cart, dispatch: dispatchCart }}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;
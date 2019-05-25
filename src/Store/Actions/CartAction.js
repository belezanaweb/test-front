import { INIT_CART } from './ActionTypes';

export const initCart = (cart) => dispatch => {
  dispatch({
    type: INIT_CART,
    payload: cart
  })
}
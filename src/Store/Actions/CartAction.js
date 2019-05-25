import { INIT_CART } from './ActionTypes';

export const initCart = (carts) => dispatch => {
  dispatch({
    type: INIT_CART,
    payload: carts
  })
}
import { SET_CART_ITEMS } from './types'

export const setCartItems = (payload) => async (dispatch) => {
  dispatch({
    type: SET_CART_ITEMS,
    payload
  })
}

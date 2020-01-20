import { CartTypes } from './types'

export const getCartRequest = () => {
  return {
    type: CartTypes.ADD_TO_CART_REQUEST,
    payload: {}
  }
}

export const getCartSuccess = products => {
  return {
    type: CartTypes.ADD_TO_CART_SUCCESS,
    payload: { products }
  }
}

export const getCartFailure = () => {
  return {
    type: CartTypes.ADD_TO_CART_FAILURE,
    payload: {}
  }
}

export const getCheckout = cart => {
  return {
    type: CartTypes.GET_CHECKOUT,
    payload: { cart }
  }
}

export const updateAmountRequest = (id, amount) => {
  return {
    type: CartTypes.UPDATE_AMOUNT_REQUEST,
    payload: { id, amount }
  }
}

export const updateAmountSuccess = (id, amount) => {
  return {
    type: CartTypes.UPDATE_AMOUNT_SUCCESS,
    payload: { id, amount }
  }
}

export const updateAmountFailure = () => {
  return {
    type: CartTypes.UPDATE_AMOUNT_FAILURE,
    payload: {}
  }
}

export const removeFromCart = id => {
  return {
    type: CartTypes.REMOVE_FROM_CART,
    payload: { id }
  }
}

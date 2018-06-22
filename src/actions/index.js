export const SET_CART_ITEMS = 'SET_CART_ITEMS'
export const SET_PAYMENT = 'SET_PAYMENT'

export const setCartItems = payload => ({
  type: SET_CART_ITEMS,
  payload
})

export const setPayment = payload => ({
  type: SET_PAYMENT,
  payload
})

export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

export const addCartItem = item => ({
  type: ADD_CART_ITEM,
  item
})

export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  id
})

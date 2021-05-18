import actionsTypes from '../../actionTypes/cart'

export function handlCartInfo(cartInfo) {
  return {
    type: actionsTypes.HANDLECARTINFO,
    cartInfo
  }
}

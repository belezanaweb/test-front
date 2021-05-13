import { SET_CART_ITEMS } from '../actions/types'

const initialState = {
  infos: { discount: 0, shippingTotal: 0, subTotal: 0, total: 0, items: [] }
}

export default function cartReducers(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ITEMS:
      return { ...state, infos: action.payload }
    default:
      return state
  }
}

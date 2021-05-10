import { SET_CART_ITEMS } from '../actions/types'

const initialState = {
  infos: {}
}

export default function cartReducers(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ITEMS:
      return { ...state, infos: action.payload }
    default:
      return state
  }
}

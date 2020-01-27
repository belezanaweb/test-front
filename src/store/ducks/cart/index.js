import producer from 'immer'
import { CartTypes } from './types'

export const INITIAL_STATE = {
  data: {},
  loading: false,
  error: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.products,
        loading: false,
        error: false
      }
    default:
      return state
  }
}

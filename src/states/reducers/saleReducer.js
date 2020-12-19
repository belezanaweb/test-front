import { SAVE_SALE } from '../actions/actionTypes'

const initialState = {
  sale: null
}

export const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SALE:
      return {
        ...state,
        sale: action.sale
      }
    default:
      return state
  }
}

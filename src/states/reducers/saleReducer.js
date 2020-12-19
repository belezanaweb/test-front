import { FILL_SALE } from '../actions/actionTypes'

const initialState = {
  sale: null
}

export const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_SALE:
      return {
        ...state,
        sale: action.sale
      }
    default:
      return state
  }
}

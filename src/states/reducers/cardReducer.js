import { SAVE_CARD } from '../actions/actionTypes'

const initialState = {
  card: null
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CARD:
      return {
        ...state,
        card: action.card
      }
    default:
      return state
  }
}

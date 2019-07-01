import { ADD_CARD_DATA } from '../actions/types'

const initialState = {
  cardData: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD_DATA:
      return {
        ...state,
        cardData: action.payload
      }
    default:
      return state
  }
}

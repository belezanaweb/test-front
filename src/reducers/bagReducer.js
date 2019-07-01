import { GET_BAG_ITEMS } from '../actions/types'

const initialState = {
  bag: [],
  bagResume: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BAG_ITEMS:
      return {
        ...state,
        bag: action.payload,
        bagResume: action.resume
      }
    default:
      return state
  }
}

import SAVE_CREDIT_CARD from '../../actionTypes/payment'

const INITIAL_STATE = {}

function creditCardReducer(state = INITIAL_STATE, { type, creditCard }) {
  switch (type) {
    case SAVE_CREDIT_CARD:
      return {
        ...state,
        ...creditCard
      }
    default:
      return state
  }
}

export default creditCardReducer

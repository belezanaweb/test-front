import { CheckoutTypes } from './types'

const INITIAL_STATE = {
  data: {
    cardNumber: false,
    holdername: false,
    expiryDate: false,
    cvc: false
  },
  loading: false,
  error: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutTypes.IS_ACTIVE_BUTTON:
      return {
        ...state,
        data: action.payload.isActive
      }
    default:
      return state
  }
}

export default reducer

import actionsTypes from '../../actionTypes/payment'

const INITIAL_STATE = {
  paymentInfo: {
    expiry: null,
    name: null,
    number: null,
    cvc: null
  }
}

function payment(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.HANDLEPAYMENTINFO:
      return {
        ...state,
        paymentInfo: action.paymentInfo
      }
    default:
      return state
  }
}

export default payment

import { createStore, combineReducers } from 'redux'

function purchaseDataReducer(state = {}, action) {
  switch (action.type) {
    case 'setPurchaseData':
      state = action.value
      return state
    default:
      return state
  }
}

function paymentDataReducer(state = {}, action) {
  switch (action.type) {
    case 'setPaymentData':
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    purchaseData: purchaseDataReducer,
    paymentData: paymentDataReducer
  })
)

export default store

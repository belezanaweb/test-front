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

function tabsReducer(
  state = { disabledTab0: false, disabledTab1: true, disabledTab2: true, currentTab: 0 },
  action
) {
  switch (action.type) {
    case 'setTabs':
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state
  }
}

function paymentDataReducer(state = { date: '', name: '', creditCard: '', cvv: '' }, action) {
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
    paymentData: paymentDataReducer,
    tabs: tabsReducer
  })
)

export default store

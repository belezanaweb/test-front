import { SET_PAYMENT_INFOS } from '../actions/types'

const initialState = {
  paymentInfos: {}
}

export default function paymentReducers(state = initialState, action) {
  switch (action.type) {
    case SET_PAYMENT_INFOS:
      return { ...state, paymentInfos: action.payload }
    default:
      return state
  }
}

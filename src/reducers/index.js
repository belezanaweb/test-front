//-----------------------------------
//  combine reducers
//

import { combineReducers } from 'redux'

import SessionReducer from './session.reducers'
import CartReducer from './cart.reducers'
import PaymentReducer from './payment.reducers'

export default combineReducers({
  SessionReducer,
  CartReducer,
  PaymentReducer
})

import { combineReducers } from 'redux'
import cartReducers from './cartReducers'
import paymentReducers from './paymentReducers'

export default combineReducers({
  cart: cartReducers,
  payment: paymentReducers
})

import { combineReducers } from 'redux'
import cartReducers from './cartReducers'

export default combineReducers({
  cart: cartReducers
})

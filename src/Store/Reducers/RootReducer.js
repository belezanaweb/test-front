import { combineReducers } from 'redux'
import CartReducers from './CartReducers';

export default combineReducers({
  cart: CartReducers
})
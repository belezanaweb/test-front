import { combineReducers } from 'redux'
import CartReducers from './CartReducers';
import PaymentReducer from './PaymentReducer';

export default combineReducers({
  cart: CartReducers,
  user: PaymentReducer
})
import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer'
import { paymentReducer } from './paymentReducer'

export const Reducers = combineReducers({
  cartState: cartReducer,
  paymentState: paymentReducer
});

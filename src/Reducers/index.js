import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer'

export const Reducers = combineReducers({
  cartState: cartReducer
});

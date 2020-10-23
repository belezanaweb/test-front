import { combineReducers } from 'redux';

import productReducer from './product/reducer';
import creditCardReducer from './credit-card/reducer';

export default combineReducers({
  product: productReducer,
  creditCard: creditCardReducer
});

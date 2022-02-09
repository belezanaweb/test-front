import { combineReducers } from 'redux';
import { cart } from './cart/reducer';
import { payments } from './payments/reducer';

export default combineReducers({ cart, payments });

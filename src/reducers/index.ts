// import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';
import { cart } from './cart';

const rootReducer = combineReducers({
  cart
});

export default rootReducer;

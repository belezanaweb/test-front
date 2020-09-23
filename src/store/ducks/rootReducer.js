import { combineReducers } from 'redux';

import cart from './cart';
import loader from './loader';

const createRootReducer = () =>
  combineReducers({
    cart,
    loader
  });

export default createRootReducer;

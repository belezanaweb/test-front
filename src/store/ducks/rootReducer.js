import { combineReducers } from 'redux';

import cart from './cart';
import checkout from './checkout';
import loader from './loader';

const createRootReducer = () =>
  combineReducers({
    cart,
    checkout,
    loader
  });

export default createRootReducer;

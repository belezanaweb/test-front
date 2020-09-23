import { combineReducers } from 'redux';

import loader from './loader';

const createRootReducer = () =>
  combineReducers({
    loader
  });

export default createRootReducer;

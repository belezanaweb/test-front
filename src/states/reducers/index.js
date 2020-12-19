import { saleReducer } from './saleReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  saleState: saleReducer,
});

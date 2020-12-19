import { combineReducers } from 'redux';

import { saleReducer } from './saleReducer';
import { cardReducer } from './cardReducer';

export const Reducers = combineReducers({
  saleState: saleReducer,
  cardState: cardReducer
});

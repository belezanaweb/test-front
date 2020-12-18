import { combineReducers } from 'redux';

import cart from './cart/reducer';

export interface AppState {
  cart: ReturnType<typeof cart>
}

export default combineReducers({ cart });

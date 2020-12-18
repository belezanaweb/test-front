import { combineReducers } from 'redux';

import carts from './carts/reducer';

export interface AppState {
  carts: ReturnType<typeof carts>
}

export default combineReducers({ carts });

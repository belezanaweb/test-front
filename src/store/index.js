import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loader from './ducks/loader';
import cart from './ducks/cart';
import checkout from './ducks/checkout';

export const middlewares = () => [thunk];

export const initializeStore = initialState =>
  createStore(
    combineReducers({
      loader,
      cart,
      checkout
    }),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares()))
  );

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import loader from './ducks/loader';

export const middlewares = () => [thunk];

export const initializeStore = initialState =>
  createStore(
    combineReducers({
      loader
    }),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares()))
  );

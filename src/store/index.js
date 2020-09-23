import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './ducks/rootReducer';

export const middlewares = () => [thunk];

export const initializeStore = (initialState) =>
  createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares()))
  );

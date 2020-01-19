import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reducers from './Reducers';

import loadingMiddleware from 'middlewares/loading';
export const history = createBrowserHistory();

export const middlewares = [
  thunk,
  routerMiddleware(history),
  loadingMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(...middlewares))
);

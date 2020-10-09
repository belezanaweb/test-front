/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import generateReducers from '../../reducers';
import Router from '../Router';
import Global from '../../styles/global';
import TopBar from '../../components/TopBar';

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
];

const store = createStore(generateReducers(history), compose(...middlewares));

const App = () => (

  <Provider store={store}>
    <TopBar />
    <Global />
    <Router history={history} />
  </Provider>
);

export default App;

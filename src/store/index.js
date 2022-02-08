/* eslint-disable no-undef */
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import api from '../services/api';

import '../config/ReactotronConfig';

const sagaMonitor = process.env.REACT_APP_ENVIRONMENT === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

api.registerInterceptWithStore(store);

sagaMiddleware.run(rootSaga);

export { store };

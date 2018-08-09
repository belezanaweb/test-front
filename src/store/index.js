import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const middlewares = [];

const sagaMonitor = null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createAppropriateStore = createStore;

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;

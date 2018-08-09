import { createStore, compose, applyMiddleware } from "redux";

import createSageMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_EN === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSageMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createAppropriateStore =
  process.env_NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;

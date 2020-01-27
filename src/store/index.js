import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null
const middlewares = []
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
})
middlewares.push(sagaMiddleware)

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : applyMiddleware(...middlewares)

const store = createStore(rootReducer, composer)

export const test = sagaMiddleware.run(rootSaga)

export default store

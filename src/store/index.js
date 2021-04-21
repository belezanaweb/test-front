import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const dummy = (_) => _

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : dummy
  )
)

sagaMiddleware.run(sagas)

export default { store }

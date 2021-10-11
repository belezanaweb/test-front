import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ducks from './ducks'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(ducks, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export default store

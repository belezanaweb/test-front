import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import AllReducers from './reducers'
import getSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({}) || compose

const store = createStore(
  combineReducers(AllReducers),
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(getSagas())

export type RootState = ReturnType<typeof store.getState>

export default store

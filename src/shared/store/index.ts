import { createStore, applyMiddleware, Store, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

export interface ApplicationState {}

type StoreParams = {
  initialState?: { [key: string]: any },
  middleware?: any[]
}

export const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
  const devtools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] })

  const composeEnhancers = devtools || compose
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = composeEnhancers(applyMiddleware(...[sagaMiddleware].concat(...middleware)))

  const store: Store<ApplicationState> = createStore(rootReducer(), initialState, enhancer)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./root-reducer', () =>
        store.replaceReducer(require('./root-reducer').default)
      )
    }
  }

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore

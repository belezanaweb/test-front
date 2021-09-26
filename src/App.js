import React from 'react'

/**
 * Libs
 */
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

/**
 * Pages
 */
// import GoodLuck from './pages/GoodLuck'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import Finish from './pages/Finish'

/**
 * Reducers
 */
import { rootReducer } from './store'

/**
 * Redux with Persist
 */
const persistConfig = {
  key: 'BotiTestFront',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

let persistor = persistStore(store)

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/" exact>
              {/* <GoodLuck /> */}
              <Redirect to="/bag" />
            </Route>
            <Route path="/bag" exact>
              {/* <GoodLuck /> */}
              <Bag />
            </Route>
            <Route path="/payment" exact>
              {/* <GoodLuck /> */}
              <Payment />
            </Route>
            <Route path="/finish" exact>
              {/* <GoodLuck /> */}
              <Finish />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App

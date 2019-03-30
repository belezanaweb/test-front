import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Reducers } from '../reducers'

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, Reducers)

export const Store = createStore(persistedReducer)
export const persistor = persistStore(Store)

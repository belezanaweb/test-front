
//---------------------------------
//  Redux store configurations


import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers'

// Persist redux provide the storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['SessionReducer','CartReducer','PaymentReducer'] //<--- set the reducer to store
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);

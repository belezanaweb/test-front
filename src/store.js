import { createStore } from 'redux';
import { Reducers } from './Reducers';
import { persistStore, persistReducer  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistCfg = {
  key: 'main',
  storage
};

const persistReducers = persistReducer(persistCfg, Reducers);

let store = createStore(persistReducers); // main store non persistent
let persistor = persistStore(store);

export {
  store,
  persistor
};

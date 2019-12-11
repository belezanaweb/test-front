import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/index.js';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
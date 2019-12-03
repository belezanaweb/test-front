import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const initStore = () => createStore(rootReducer, applyMiddleware(thunk));

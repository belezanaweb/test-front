import { createStore } from 'redux';
import rootReducers from './modules/rootReducer';

const store = createStore(rootReducers);

export default store;

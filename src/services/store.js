import { createStore } from 'redux';
import appReducer from './appReducer';

export default createStore(appReducer);
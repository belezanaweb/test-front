import { createStore } from 'redux';
import { Reducers } from '../Reducers';

let store = createStore(Reducers); // main store non persistent

export {
  store
};

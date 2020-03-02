import configureStore from 'redux-mock-store';
import { middlewares } from '../../store';

export const initialStore = {
  loader: {
    show: false
  }
};

const createMockedStore = (initial = initialStore) => configureStore(middlewares())(initial);

export default createMockedStore;

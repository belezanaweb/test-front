import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cart from './cart';
import menu from './menu';

const generateReducers = (history) => combineReducers({
  router: connectRouter(history),
  cart,
  menu,
});

export default generateReducers;

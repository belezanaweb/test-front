import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const generateReducers = (history) => combineReducers({
  router: connectRouter(history),
});

export default generateReducers;

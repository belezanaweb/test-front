import { combineReducers } from 'redux';
import pageReducer from './pages/reducer';
import productReducer from './products/reducer';
import formReducer from './form/reducer';
import totalReducer from './total/reducer';

export default combineReducers({
  pageReducer, productReducer, formReducer, totalReducer
});

import { combineReducers } from 'redux';

import cart from './cart/reducer';
import step from './step/reducer';
import form from './form/reducer';

export default combineReducers({
	cart,
	step,
	form
});

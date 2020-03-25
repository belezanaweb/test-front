import { combineReducers } from 'redux';

import cart from './cart/reducer';
import step from './step/reducer';

export default combineReducers({
	cart,
	step
});

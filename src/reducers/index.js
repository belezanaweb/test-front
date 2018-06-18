

//-----------------------------------
//  combine reducers
//  


import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import CartReducer from './CartReducer';

export default combineReducers({
    SessionReducer,
    CartReducer
});

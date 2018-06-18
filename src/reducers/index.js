

//-----------------------------------
//  combine reducers
//  


import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import CartReducer from './CartReducer';
import PaymentReducer from './PaymentReducer';

export default combineReducers({
    SessionReducer,
    CartReducer,
    PaymentReducer
});

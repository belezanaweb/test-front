/**
 * Dependencies
 */
import { combineReducers } from 'redux'

/*** Redeucers*/
import bag from '../api/bag/bag.reducer'
import payment from '../api/payment/payment.reducer'

// function requestMessage(state = {}, action) {
//   const { requestMessage } = action;
//
//   const success = requestMessage ? requestMessage.success : false;
//   const error = requestMessage ? requestMessage.error : false;
//
//   return { success, error };
// }

export default combineReducers({
  bag,
  payment
})

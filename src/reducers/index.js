import { combineReducers } from 'redux'
import bagReducer from './bagReducer'
import paymentReducer from './paymentReducer'

export default combineReducers({
  bagReducer,
  paymentReducer
})

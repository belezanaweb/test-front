import { combineReducers } from 'redux'

import cart from './cart'
import checkout from './checkout'

export default combineReducers({
  cart,
  checkout
})
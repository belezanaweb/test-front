import { combineReducers } from 'redux'

import cart from './cart'
import format from './format'
import payment from './payment'

const cartApp = combineReducers({
  cart,
  format,
  payment
})

export default cartApp

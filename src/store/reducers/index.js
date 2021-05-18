import { combineReducers } from 'redux'

import cart from './cart'
import payment from './payment'
import menu from './menu'

const reducers = combineReducers({
  cart,
  payment,
  menu
})

export default reducers

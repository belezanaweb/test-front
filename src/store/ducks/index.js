import { combineReducers } from 'redux'

import basket from './basket'
import checkout from './checkout'

export default combineReducers({
  basket,
  checkout
})

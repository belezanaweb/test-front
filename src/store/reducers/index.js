import { combineReducers } from 'redux'

import checkout from './checkout'
import page from './page'
import card from './card'

export default combineReducers({
  checkout,
  page,
  card
})

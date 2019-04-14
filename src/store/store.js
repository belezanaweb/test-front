import { createStore, combineReducers } from 'redux'
import { cart } from './reducers/cart'
import { payment } from './reducers/payment'

export default createStore(
  combineReducers({
    cart,
    payment,
  }),
)

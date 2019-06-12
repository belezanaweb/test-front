import {combineReducers} from 'redux'
import products from './products'
import payment from './payment'
import  errors from './errors'

export default combineReducers({
  products,
  errors,
  payment
})

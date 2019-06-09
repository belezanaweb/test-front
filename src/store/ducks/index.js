import {combineReducers} from 'redux'
import products from './products'
import  errors from './errors'

export default combineReducers({
  products,
  errors
})

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import products from './reducers/products'

const store = createStore(
  combineReducers({
    products
  }),
  applyMiddleware(thunk)
)

export default store

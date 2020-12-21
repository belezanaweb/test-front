import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cards from './reducers/cards'
import products from './reducers/products'

const store = createStore(
  combineReducers({
    cards,
    products
  }),
  applyMiddleware(thunk)
)

export default store

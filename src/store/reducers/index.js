import { combineReducers } from 'redux'
import { products } from './products'
import { card } from './card'

const reducers = combineReducers({
  products,
  card
})

export { reducers }

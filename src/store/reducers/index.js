import { combineReducers } from 'redux'
import { products } from './products'
import { card } from './card'
import { order } from './order'

const reducers = combineReducers({
  products,
  card,
  order
})

export { reducers }

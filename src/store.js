import { createStore, combineReducers } from 'redux'
import data from './reducers/data'

const store = createStore(
  combineReducers({
    data
  })
)

export default store

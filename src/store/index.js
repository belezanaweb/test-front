import { createStore, combineReducers } from 'redux'
import cart from './duck/cart'

const rootReducer = combineReducers({ cart })
const store = createStore(rootReducer)

export default store

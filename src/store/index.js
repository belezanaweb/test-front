import { createStore, combineReducers } from 'redux'
import cart from './duck/cart'
import form from './duck/form'

const rootReducer = combineReducers({ cart, form })
const store = createStore(rootReducer)

export default store

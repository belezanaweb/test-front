import { createStore } from 'redux'
import bagReducer from './reducers/bag'

const store = createStore(bagReducer)

export default store

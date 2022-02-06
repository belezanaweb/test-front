import { createStore } from 'redux'
import rootReducer from './ducks/index'

const store = createStore(rootReducer)
export default store

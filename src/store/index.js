import { createStore, applyMiddleware } from 'redux'

import axios from 'axios'

import thunk from 'react-redux'

import rootReducers from './reducers'

const store = createStore(rootReducers)

export default store

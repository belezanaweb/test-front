import React from 'react'
import { Provider } from 'react-redux'

import Router from './router'

import configureStore from './store'

import './styles/base'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App

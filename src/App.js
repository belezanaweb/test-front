import React from 'react'
import { Provider } from 'react-redux'

import './config/reactotron'

import store from './store'

import './styles/global'

import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App

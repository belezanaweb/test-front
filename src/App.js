import React from 'react'
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './store'

import { GlobalStyle } from './App.css'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
)

export default App

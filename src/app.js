import React from 'react'
import { Provider } from 'react-redux'

import Main from './components/Main'

import Router from './router'

import configureStore from './store'

import './styles/base'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Main>
      <Router />
    </Main>
  </Provider>
)

export default App

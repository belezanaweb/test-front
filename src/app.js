import React, { Fragment } from 'react'
import { Provider } from 'react-redux'

import Nav from './components/Nav'

import Router from './router'

import configureStore from './store'

import './styles/base'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Nav />
      <Router />
    </Fragment>
  </Provider>
)

export default App

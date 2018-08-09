import React, { Fragment } from 'react'
import { Provider } from 'react-redux'

import Steps from './components/Steps'

import Router from './router'

import configureStore from './store'

import './styles/base'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Steps />
      <Router />
    </Fragment>
  </Provider>
)

export default App

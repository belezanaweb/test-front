import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/reactotron'

import store from './store'

import './styles/global'

import Routes from './routes'

import Header from './components/Header'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
    </BrowserRouter>
  </Provider>
)

export default App

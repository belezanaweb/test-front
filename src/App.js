import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import logo from './logo.svg'
// import './App.css'

import './config/ReactotronConfig'
import Global from './styles/global'
import Header from '~/components/template/Header'
import Routes from './routes'

import history from './services/history'
import store from '~/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <>
            <Header />
            <Routes />
          </>
          <Global />
          <ToastContainer autoClose={3000} />
        </Router>
      </Provider>
    )
  }
}

export default App

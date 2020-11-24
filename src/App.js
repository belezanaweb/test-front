import React from 'react'
import './App.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import history from './utils/history'
import store from './store/store'
import { BrowserRouter, Router } from 'react-router-dom'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className="app-container">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </Router>
  </Provider>
)
export default App

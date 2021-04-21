import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import history from './services/history'

import './config/ReactotronConfig'

const Appliaction = () => (
  <Router history={history}>
    <App />
  </Router>
)

ReactDOM.render(<Appliaction />, document.getElementById('root'))

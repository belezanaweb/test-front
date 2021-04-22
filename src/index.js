import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import history from './services/history'

import './config/ReactotronConfig'
import Store from './store'

const Appliaction = () => (
  <Provider store={Store.store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(<Appliaction />, document.getElementById('root'))

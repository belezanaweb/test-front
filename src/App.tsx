import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Routes />
        </Router>
      </React.StrictMode>
    </Provider>
  )
}

export default App

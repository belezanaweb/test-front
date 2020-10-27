import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import store from './redux/store'
import theme from './theme'

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </React.StrictMode>
    </Provider>
  )
}

export default App

import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../src/global/theme'
import { GlobalStyles } from './global/styles'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ThemeProvider>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

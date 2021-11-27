import React, { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/global/theme'
import { GlobalStyles } from './global/styles'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

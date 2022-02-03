import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './assets/styles/global'

const Root = () => (
  <BrowserRouter>
    <StrictMode>
      <App />
      <GlobalStyle />
    </StrictMode>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()

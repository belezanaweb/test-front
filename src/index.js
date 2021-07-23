import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './assets/styles/global'

const Strict = () => (
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

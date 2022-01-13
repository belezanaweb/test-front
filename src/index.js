import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

const Strict = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

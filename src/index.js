import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
const routes = createRoutes()

const Strict = () => (
  <StrictMode>
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, routes, document.getElementById('root'))

serviceWorker.unregister()

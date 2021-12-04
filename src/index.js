import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Layout/App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

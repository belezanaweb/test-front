import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '../src/containers/App/App';
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <App />    
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

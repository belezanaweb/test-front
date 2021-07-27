import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './globalStyles'
import App from './container/App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

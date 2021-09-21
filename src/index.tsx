import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { App } from './modules'
import { GlobalStyle } from 'components'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Main } from './container'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <Main />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

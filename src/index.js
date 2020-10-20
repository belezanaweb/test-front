import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <App />
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const Strict = () => (
  <StrictMode>
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

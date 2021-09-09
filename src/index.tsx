import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const Strict = (): React.ReactElement => (
  <StrictMode>
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

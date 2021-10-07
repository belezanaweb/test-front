import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './styles/global'

const Strict = () => (
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

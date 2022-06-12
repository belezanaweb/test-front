import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const Strict = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

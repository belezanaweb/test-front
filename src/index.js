import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './assets/styles/global'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
  </BrowserRouter>,

  document.getElementById('root')
)

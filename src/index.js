import React from 'react'
import ReactDOM from 'react-dom'
import AppWrapper from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './assets/styles/global'

const Root = () => (
  <BrowserRouter>
    <AppWrapper />
    <GlobalStyle />
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.unregister()

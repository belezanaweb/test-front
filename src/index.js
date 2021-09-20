import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from './styles/generic/Reset'
import { Base } from './styles/global/Base'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

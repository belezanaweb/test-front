import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { createRoutes } from './routes'
import { CartContextProvider } from './components/Context/Context'

const routes = createRoutes()

ReactDOM.render(
  <CartContextProvider>{routes}</CartContextProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()

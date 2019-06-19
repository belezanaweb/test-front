/**
 * Dependecies
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

/*** Assets*/
import './assets/index.css'
import './assets/fadeTransition.css'

/*** Configs*/
import Routes from './configs/routes'
import configureStore from './configs/configureStore'
import * as serviceWorker from './serviceWorker'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()

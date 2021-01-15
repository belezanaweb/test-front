import React from 'react'
import store from './Store/index'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

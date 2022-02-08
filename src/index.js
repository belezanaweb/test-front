import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Main } from './container'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store/'

const Strict = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

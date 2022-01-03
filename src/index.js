import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { Provider } from 'react-redux'
const Strict = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

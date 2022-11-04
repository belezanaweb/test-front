import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
// import Provider from './Context/Provider'

const Strict = () => (
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

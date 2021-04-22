import * as serviceWorker from './serviceWorker'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

const Strict = () => (
  <StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Cart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/cart">
            <Confirmation />
          </Route>
        </Switch>
      </div>
    </Router>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Footer, Header } from './css/styles'

import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

const Strict = () => (
  <div id="page-body">
    <Header>Grupo Boticário</Header>
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Cart />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer>
      <p>&#169; 2021</p>
    </Footer>
  </div>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()

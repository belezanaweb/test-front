import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'

import Basket from './pages/Basket/Basket'
import Confirmation from './pages/Confirmation/Confirmation'
import Payment from './pages/Payment/Payment'

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Basket />
          </Route>
          <Route path="/pagamento">
            <Payment />
          </Route>
          <Route path="/confirmacao">
            <Confirmation />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
)

export default App

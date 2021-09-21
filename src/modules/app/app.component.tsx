import { Steps } from 'components'
import { Cart, Confirm, Payment } from 'modules'
import React, { FC } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

export const App: FC<{ children?: never }> = () => (
  <Router>
    <Steps />
    <Switch>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/payment" exact>
        <Payment />
      </Route>
      <Route path="/confirm" exact>
        <Confirm />
      </Route>
      <Route path="*">
        <Redirect to="/cart" />
      </Route>
    </Switch>
  </Router>
)

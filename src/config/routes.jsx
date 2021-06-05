import { BrowserRouter, Route, Switch } from 'react-router-dom'

import React from 'react'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>

      <Route path="/cart">
        <h1>Cart</h1>
      </Route>

      <Route path="/payment">
        <h1>Payment</h1>
      </Route>

      <Route path="/confirmation">
        <h1>Confirmation</h1>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes

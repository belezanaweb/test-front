import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

import { Cart, Payment, PaymentConfirmation } from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <NavLink to="/cart">Ir para o Checkout</NavLink>
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/payment">
        <Payment />
      </Route>

      <Route path="/confirmation">
        <PaymentConfirmation />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes

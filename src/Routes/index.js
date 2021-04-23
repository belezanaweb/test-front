import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import CheckoutCart from '../Pages/CheckoutCart'
import CheckoutPayment from '../Pages/CheckoutPayment'
import CheckoutDone from '../Pages/CheckoutDone'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/checkout/cart" />
      </Route>
      <Route path="/checkout/cart" component={CheckoutCart} />
      <Route path="/checkout/payment" component={CheckoutPayment} />
      <Route path="/checkout/done" component={CheckoutDone} />
    </Switch>
  </BrowserRouter>
)

export default Routes

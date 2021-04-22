import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CheckoutCart from '../Pages/CheckoutCart'
import CheckoutPayment from '../Pages/CheckoutPayment'
import CheckoutDone from '../Pages/CheckoutDone'

const Routes = () => (
  <Switch>
    <Route path="/checkout/cart" component={CheckoutCart} />
    <Route path="/checkout/payment" component={CheckoutPayment} />
    <Route path="/checkout/done" component={CheckoutDone} />
  </Switch>
)

export default Routes

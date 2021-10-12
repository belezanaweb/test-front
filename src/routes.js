import React, { lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Cart = lazy(() => import('./pages/Cart'))
const Payment = lazy(() => import('./pages/Payment'))
const Success = lazy(() => import('./pages/Success'))

const Routes = () => (
  <Switch>
    <Route path="/cart" component={Cart} />
    <Route path="/payment" component={Payment} />
    <Route path="/success" component={Success} />

    <Redirect to="/cart" />
  </Switch>
)

export default Routes

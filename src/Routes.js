import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Bag = lazy(() => import('./pages'))
const Payment = lazy(() => import('./pages/Payment'))
const Checkout = lazy(() => import('./pages/Checkout'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" exact={true} component={Bag} />
      <Route path="/payment" component={Payment} />
      <Route path="/checkout" component={Checkout} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
)

export default Routes

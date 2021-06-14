import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Loading from '../components/Loading'

const Cart = lazy(() => import('../pages/Cart'))
const Checkout = lazy(() => import('../pages/Checkout'))
const Confirmation = lazy(() => import('../pages/Confirmation'))

const RedirectToCheckout = () => <Redirect to={{ pathname: '/cart' }} />

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="/">
        <RedirectToCheckout />
      </Route>
    </Switch>
  </Suspense>
)

export default Routes

import React, { lazy } from 'react'
import { Router, Redirect } from '@reach/router'
import { withSuspense } from './hocs/withSuspense'
import Loading from './components/Loading'

// dynamic lazy routes
const Checkout = lazy(() =>
  import(
    /* webpackChunkName: "checkout" */
    /* webpackPrefetch: true */
    /* webpackPreload: true */
    './pages/checkout'
  )
)
const Cart = lazy(() =>
  import(
    /* webpackChunkName: "cart" */
    /* webpackMode: "lazy" */
    './pages/checkout/cart'
  )
)
const Confirmation = lazy(() =>
  import(
    /* webpackChunkName: "confirmation" */
    /* webpackMode: "lazy" */
    './pages/checkout/confirmation'
  )
)
const Payment = lazy(() =>
  import(
    /* webpackChunkName: "payment" */
    /* webpackMode: "lazy" */
    './pages/checkout/payment'
  )
)

function App () {
  return (
    <Router>
      <Redirect noThrow from="/" to="/checkout" />
      <Checkout path="/checkout">
        <Redirect from="/" to="cart" />
        <Cart path="cart" />
        <Confirmation path="confirmation" />
        <Payment path="payment" />
      </Checkout>
    </Router>
  )
}

export default withSuspense({ fallback: <Loading /> })(App)

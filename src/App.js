import React from 'react'
import { Router, Redirect } from '@reach/router'
import { withSuspense } from './hocs/withSuspense'
import Loading from './components/Loading'
// Routes
import Checkout from './views/Checkout'
import Cart from './views/Cart'
import Payment from './views/Payment'
import Confirmation from './views/Confirmation'

function App () {
  return (
    <Router>
      <Redirect noThrow from="/" to="/checkout" />
      <Checkout path="/checkout">
        <Cart path="cart" />
        <Payment path="payment" />
        <Confirmation path="confirmation" />
      </Checkout>
      <Redirect from="/*" to="/checkout" />
    </Router>
  )
}

export default withSuspense({ fallback: <Loading /> })(App)

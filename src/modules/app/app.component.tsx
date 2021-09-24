import React, { FC, Suspense, lazy } from 'react'
import { Steps } from 'components'
import { CheckoutProvider } from 'context/checkout.context'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

const Cart = lazy(() => import('../cart/cart.component'))
const Payment = lazy(() => import('../payment/payment.component'))
const Confirm = lazy(() => import('../confirm/confirm.component'))

export const App: FC<{ children?: never }> = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <CheckoutProvider>
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
    </CheckoutProvider>
  </Suspense>

)

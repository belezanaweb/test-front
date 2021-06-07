import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'

const Cart = React.lazy(() => import('../pages/Cart'))
const Payment = React.lazy(() => import('../pages/Payment'))
const PaymentConfirmation = React.lazy(() => import('../pages/PaymentConfirmation'))

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <React.Suspense fallback={<span>Loading...</span>}>
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
      </React.Suspense>
    </Switch>
  </BrowserRouter>
)

export default Routes

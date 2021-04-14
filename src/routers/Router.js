import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartScreen from '../screens/cartScreen/CartScreen'
import PaymentScreen from '../screens/paymentScreen/PaymentScreen'
import ConfirmationScreen from '../screens/confirmationScreen/ConfirmationScreen'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/cart']}>
          <CartScreen />
        </Route>

        <Route exact path="/payment">
          <PaymentScreen />
        </Route>

        <Route exact path="/confirmation">
          <ConfirmationScreen />
        </Route>

        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

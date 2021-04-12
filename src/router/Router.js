import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from '../screens/CartPage/CartPage'
import ConfirmationPage from '../screens/ConfirmationPage/ConfirmationPage'
import PaymentPage from '../screens/PaymentPage/PaymentPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/cart']}>
          <CartPage />
        </Route>
        <Route exact path={'/payment'}>
          <PaymentPage />
        </Route>
        <Route exact path={'/confirmation'}>
          <ConfirmationPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

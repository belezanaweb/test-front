import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen/ConfirmationScreen'
import ErrorScreen from '../screens/ErrorScreen/ErrorScreen'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/cart', '/']}>
          <ShoppingCartScreen />
        </Route>
        <Route exact path="/payment">
          <PaymentScreen />
        </Route>
        <Route exact path="/confirm">
          <ConfirmationScreen />
        </Route>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

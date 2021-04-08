import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen'
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen/ConfirmationScreen'
import ErrorScreen from '../screens/ErrorScreen/ErrorScreen'
import Header from '../components/Header/Header'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/cart', '/']}>
          <Header changeCart={true} />
          <ShoppingCartScreen />
        </Route>
        <Route exact path="/payment">
          <Header changePayment={true} />
          <PaymentScreen />
        </Route>
        <Route exact path="/confirm">
          <Header changeConfirm={true} />
          <ConfirmationScreen />
        </Route>
        <Route>
          <Header />
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

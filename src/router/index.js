import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ShoppingCart } from '../pages/ShoppingCart'
import { PaymentConfirmation } from '../pages/PaymentConfirmation'
import { PaymentPage } from '../pages/PaymentPage'
import { ErrorPage } from '../pages/ErrorPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={['/', '/carrinho']} component={ShoppingCart} />

      <Route exact path={'/pagamento'} component={PaymentPage} />

      <Route exact path={'/confirmacao-de-pagamento'} component={PaymentConfirmation} />

      <Route path="*">
        <ErrorPage errorCode="404" />
      </Route>
    </Switch>
  )
}

export default Routes

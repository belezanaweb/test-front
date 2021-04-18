import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ShoppingCart } from '../pages/ShoppingCart'
import { PaymentConfirmation } from '../pages/PaymentConfirmation'
import { PaymentPage } from '../pages/PaymentPage'
// import { ErrorPage } from '../pages/ErrorPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={['/', '/carrinho']}>
        <ShoppingCart />
      </Route>
      <Route exact path={'/pagamento'}>
        <PaymentPage />
      </Route>
      <Route exact path={'/confirmacao-de-pagamento'}>
        <PaymentConfirmation />
      </Route>
      {/* <Route path="*">
          <ErrorPage errorCode="404" />
      </Route> */}
    </Switch>
  )
}

export default Routes

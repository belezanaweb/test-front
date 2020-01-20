import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Cart from '~/pages/Cart'
import Checkout from '~/pages/Checkout'
import CheckoutFinaly from '~/pages/CheckoutFinaly'

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/checkout/sacola" component={Cart} />
      <Route path="/checkout/transacional/pagamento" component={Checkout} />
      <Route path="/checkout/recibo" component={CheckoutFinaly} />
    </Switch>
  </>
)

export default Routes

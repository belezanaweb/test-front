import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Cart from '../pages/cart'
import Payment from '../pages/payment'
import Confirmation from '../pages/confirmation'

const Routes = () => (
  <Switch>
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/payment" component={Payment} />
    <Route exact path="/confirmation" component={Confirmation} />
  </Switch>
)

export default Routes

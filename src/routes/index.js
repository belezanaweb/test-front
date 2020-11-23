import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './../pages/Cart/Cart'
import Payment from './../pages/Payment/Payment'
import Checkout from './../pages/Checkout/Checkout'

export default function Routes(props) {
  return (
    <Switch>
      <Route path={'/'} exact component={Cart} />
      <Route path={'/cart'} exact component={Cart} />
      <Route path={'/payment'} exact component={Payment} />
      <Route path={'/checkout'} exact component={Checkout} />
    </Switch>
  )
}

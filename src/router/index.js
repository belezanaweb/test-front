import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Basket from '../pages/basket'
import Checkout from '../pages/checkout'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/basket' component={Basket} />
      <Route path='/checkout' component={Checkout} />
    </Switch>
  </BrowserRouter>
)

export default Router

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Basket from '../pages/basket'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/basket' component={Basket} />
    </Switch>
  </BrowserRouter>
)

export default Router

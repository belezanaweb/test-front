import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../pages/main'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  </BrowserRouter>
)

export default Router

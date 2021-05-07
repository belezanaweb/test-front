import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

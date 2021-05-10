import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components'
import Cart from './pages/Cart'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Cart} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

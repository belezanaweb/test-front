import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Success from './pages/Success'

import { Header } from './components'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Cart} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import Success from './pages/Success'

const Routes = () => (
  <Switch>
    <Route exact path="/carrinho" component={Cart} />
    <Route exact path="/pagamento" component={Payment} />
    <Route exact path="/sucesso" component={Success} />

    <Redirect to="/carrinho" />
  </Switch>
)

export default Routes

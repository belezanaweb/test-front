import React, { Component } from 'react'
import Cart from '../Pages/Cart/Cart'
import Payment from '../Pages/Payment/Payment'
import Success from '../Pages/Success/Success'
import { Switch, Route } from 'react-router-dom'
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Cart} />
        <Route path="/payment" exact={true} component={Payment} />
        <Route path="/success" exact={true} component={Success} />
      </Switch>
    )
  }
}

export default Routes

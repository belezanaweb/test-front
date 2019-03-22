import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Bag from './screens/bag'
import Payment from './screens/payment'
import Confirmation from './screens/confirmation'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Bag} />
          <Route path="/payment" component={Payment} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </BrowserRouter>
    )
  }
}

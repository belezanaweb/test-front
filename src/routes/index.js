import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Success from './pages/Sucess';

const Routes = () => (
  <Switch>
    <Route exact  path="/" component={Cart} />
    <Route exact path="/payment" component={Payment} />
    <Route exact path="/success" component={Success} />
  </Switch>
)

export default Routes;

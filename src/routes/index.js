import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';
import Payment from './pages/Payment';

const Routes = () => (
  <Switch>
    <Route exact  path="/" component={Cart} />
    <Route exact path="/payment" component={Payment} />
  </Switch>
)

export default Routes;

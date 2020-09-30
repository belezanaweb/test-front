import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Cart} />
  </Switch>
)

export default Routes;

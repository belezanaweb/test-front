import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from 'pages/Cart';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

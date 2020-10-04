import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Cart from 'pages/Cart';
import Payment from 'pages/Payment';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/cart" />
      </Route>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/payment" component={Payment} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Cart from 'pages/Cart';
import Payment from 'pages/Payment';
import Success from 'pages/Success';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/cart" />
      </Route>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/success" component={Success} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

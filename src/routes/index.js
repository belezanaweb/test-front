import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import Success from '../pages/Success';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/checkout" />

      <Route path="/checkout" component={Checkout} />
      <Route path="/payment" component={Payment} />
      <Route path="/success" component={Success} />
    </Switch>
  );
}

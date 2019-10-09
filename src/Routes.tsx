import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Cart } from './containers/Cart';
import { Payment } from './containers/Payment';
import { Success } from './containers/Success';

export class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/cart" component={Cart} />
        <Route exact={true} path="/payment" component={Payment} />
        <Route exact={true} path="/success" component={Success} />
        <Redirect to="/cart" />
      </Switch>
    );
  }
}

import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CartPage } from './pages/CartPage';
import { PaymentPage } from './pages/PaymentPage';
import { SuccessPage } from './pages/SuccessPage';

export class Routes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/cart" component={CartPage} />
        <Route exact={true} path="/payment" component={PaymentPage} />
        <Route exact={true} path="/success" component={SuccessPage} />
        <Redirect to="/cart" />
      </Switch>
    );
  }
}

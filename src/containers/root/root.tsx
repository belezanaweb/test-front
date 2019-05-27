import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import CheckoutContainer from '../checkout/checkout';

const Root: React.FC<any> = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/checkout" component={CheckoutContainer} />
      <Route from="*" render={() => <div>Error 404</div>} />
    </Switch>
  </Provider>
);

export default Root;

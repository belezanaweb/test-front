import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

/**
 * Pages
 */
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Cart} />
    <Route exact path="/checkout" component={Payment} />
  </Fragment>
);

export default Routes;

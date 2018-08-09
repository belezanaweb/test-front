import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

/**
 * Pages
 */
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import Success from '../pages/Success';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Cart} />
    <Route exact path="/checkout" component={Payment} />
    <Route exact path="/success" component={Success} />
  </Fragment>
);

export default Routes;

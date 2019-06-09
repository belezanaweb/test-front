import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ShoppingCart from '../pages/shopping-cart'
import Payment from '../pages/payment'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ShoppingCart}/>
      <Route path="/payment" exact component={Payment}/>
      <Route path="/" exact component={ShoppingCart}/>
    </Switch>
  </BrowserRouter>
)

export default Routes

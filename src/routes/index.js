import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ShoppingCart from '../pages/shopping-cart'
import Payment from '../pages/payment'
import Success from '../pages/success'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ShoppingCart}/>
      <Route path="/payment" exact component={Payment}/>
      <Route path="/success" exact component={Success}/>
    </Switch>
  </BrowserRouter>
)

export default Routes

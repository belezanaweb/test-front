import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Bag from './pages/Bag';
import Payment from './pages/Payment';
import Success from './pages/Success';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Bag} />
      <Route path="/pagamento" component={Payment} />
      <Route path="/sucesso" component={Success} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

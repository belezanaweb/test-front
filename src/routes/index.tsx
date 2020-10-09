import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Confirmacao from '../pages/Confirmacao';
import NotFound from '../pages/NotFound';
import Pagamento from '../pages/Pagamento';
import Sacola from '../pages/Sacola';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Sacola} />
      <Route path="/pagamento" component={Pagamento} />
      <Route path="/confirmacao" component={Confirmacao} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;

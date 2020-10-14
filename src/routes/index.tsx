import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';
import NotFound from '../pages/NotFound';

const Sacola = React.lazy(() => import('../pages/Sacola'));
const Pagamento = React.lazy(() => import('../pages/Pagamento'));
const Confirmacao = React.lazy(() => import('../pages/Confirmacao'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Sacola} />
        <Route path="/pagamento" component={Pagamento} />
        <Route path="/confirmacao" component={Confirmacao} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;

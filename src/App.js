import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Menu';
import { NotFound, Loading } from './styles/Root';

function App() {

  return (
    <>
      <Menu />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/cart" />} />
          { routes.map(route => <Route key={route.id} path={route.path} exact={route.exact} component={route.component} />)}
          <Route>
            <NotFound>Não encontrado</NotFound>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
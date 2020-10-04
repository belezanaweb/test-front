import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Menu';
import { RootCSS } from './styles';

function App() {

  const { Loading, NotFound } = RootCSS;

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
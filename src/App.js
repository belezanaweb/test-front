import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import Tabs from './components/Tabs';
import Root from './styles/Root';

function App() {

  const { NotFound } = Root;

  return (
    <>
      <Tabs />
      <Switch>
        <Route path="/" exact component={() => <Redirect to={routes[0].path} />} />
        { routes.map(route => <Route key={route.id} path={route.path} exact={route.exact} component={route.component} />)}
        <Route>
          <NotFound>Não encontrado</NotFound>
        </Route>
      </Switch>
    </>
  );
}

export default App;

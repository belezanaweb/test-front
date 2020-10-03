import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Menu';
import { NotFound } from './styles/Root';

function App() {

  return (
    <>
      <Menu />
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

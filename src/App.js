import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import Steps from './components/Steps';

function App() {
  return (
    <>
      <Steps />
      <Switch>
        <Route path="/" exact component={() => <Redirect to={routes[0].path} />} />
        { routes.map(route => <Route key={route.id} path={route.path} exact={route.exact} component={route.component} />)}
        <Route>
          <h1>Não encontrado</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;

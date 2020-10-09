import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import CartPage from '../Cart';
import routes from '../../enums/routes';

function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.root} component={CartPage} />
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Router;

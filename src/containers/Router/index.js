import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import routes from '../../enums/routes';
import CartPage from '../Cart';
import PaymentPage from '../Payment';
import ConfirmationPage from '../Confirmation';

function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.root} component={CartPage} />
        <Route exact path={routes.payment} component={PaymentPage} />
        <Route exact path={routes.confirmation} component={ConfirmationPage} />
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Router;

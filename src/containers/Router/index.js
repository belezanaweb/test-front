import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

export const routes = {
  root: '/',
  payment: '/payment',
  confirmation: '/confirmation',
};

function Router(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch />
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Router;

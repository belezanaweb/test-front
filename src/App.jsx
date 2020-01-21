import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/Redux';
import Loading from 'components/Loading';

const Cart = lazy(() => import('containers/Cart'));
const Payment = lazy(() => import('containers/Payment'));
const Success = lazy(() => import('containers/Success'));

const App = () => (
  <ConnectedRouter key="router" history={history}>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          key="home"
          name="Home"
          exact
          path="/"
          render={() => <Redirect to="/cart" />}
        />
        <Route key="cart" name="Cart" exact path="/cart" component={Cart} />
        <Route
          key="payment"
          name="Payment"
          exact
          path="/payment"
          component={Payment}
        />
        <Route
          key="success"
          name="Success"
          exact
          path="/success"
          component={Success}
        />
      </Switch>
    </Suspense>
  </ConnectedRouter>
);

export default App;

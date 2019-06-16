import React from 'react';
import { css } from 'aphrodite/no-important';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';

import styles from './styles';

import Header from './components/header/Header';
import AppLoading from './components/common/appLoading/AppLoading';

const Bag = Loadable({
  loader: () => import('./components/bag/Bag'),
  loading: AppLoading,
});

const Payment = Loadable({
  loader: () => import('./components/payment/Payment'),
  loading: AppLoading,
});

const Success = Loadable({
  loader: () => import('./components/success/Success'),
  loading: AppLoading,
});

const App = () => (
  <Router>
    <div className={css(styles.container)}>
      <div className={css(styles.content)}>
        <Header />
        <Route
          exact
          path="/"
          /* We do not have a Home Page, so let's set /sacola as default */
          render={() => (<Redirect to={{ pathname: '/sacola' }} />)}
        />
        <Route path="/sacola" component={Bag} />
        <Route path="/pagamento" component={Payment} />
        <Route path="/sucesso" component={Success} />
      </div>
    </div>
  </Router>
);

export default App;

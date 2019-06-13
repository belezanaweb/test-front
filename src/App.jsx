import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';

import './App.css';
import Header from './components/header/Header';
import AppLoading from './components/appLoading/AppLoading';

const Bag = Loadable({
  loader: () => import('./components/bag/Bag'),
  loading: AppLoading,
});

const Payment = Loadable({
  loader: () => import('./components/payment/Payment'),
  loading: AppLoading,
});

const Confirm = Loadable({
  loader: () => import('./components/confirm/Confirm'),
  loading: AppLoading,
});

const App = () => (
  <Router>
    <div>
      <Header />
      <Route
        exact
        path="/"
        /* We do not have a Home Page, so let's set /sacola as default */
        render={() => (<Redirect to={{ pathname: '/sacola' }} />)}
      />
      <Route path="/sacola" component={Bag} />
      <Route path="/pagamento" component={Payment} />
      <Route path="/confirma" component={Confirm} />
    </div>
  </Router>
);

export default App;

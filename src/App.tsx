import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CartList from './pages/CartList';
import CartPayment from './pages/CartPayment';
import CartConfirmation from './pages/CartConfirmation';

import AppProvider from './providers/AppProvider';

import GlobalStyle from './styles/global';
import { AppContainer } from './styles/styles';
import { createBrowserHistory } from 'history';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  const history = createBrowserHistory();

  return (
    <AppContainer>
      <AppProvider>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={CartList}></Route>
            <Route path="/cart/payment" exact component={CartPayment}></Route>
            <Route path="/cart/confirmation" exact component={CartConfirmation}></Route>
          </Switch>
        </Router>

        <GlobalStyle />
      </AppProvider>
    </AppContainer>
  );
}

export default App;

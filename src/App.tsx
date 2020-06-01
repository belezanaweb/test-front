import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store';
import theme, { Theming } from './theme';

const Cart = lazy(() => import('./pages/cart'));
const Payment = lazy(() => import('./pages/payment'));
const Success = lazy(() => import('./pages/success'));

const persistor = getPersistor();

function App() {
  return (
    <Theming theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <Suspense fallback={null}>
              <Switch>
                <Redirect exact path="/" to="/cart" />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/success" component={Success} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Theming>
  );
}

export default App;

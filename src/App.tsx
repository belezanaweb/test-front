import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store';
import theme from './theme';

const Cart = lazy(() => import('./pages/cart'));
const Payment = lazy(() => import('./pages/payment'));
const Success = lazy(() => import('./pages/success'));

const CustomGlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    transition:
      color 0.5s,
      background-color 0.5s,
      border-color 0.5s;
  }
`;

const persistor = getPersistor();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomGlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
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
    </ThemeProvider>
  );
}

export default App;

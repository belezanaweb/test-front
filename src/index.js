import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';

import './index.css';

import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';

import CheckoutContainer from '~/components/CheckoutContainer';
import { initializeStore } from './store';

import pages from '~/utils/pages-data';

const store = initializeStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Normalize />
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <Switch>
              <Route path="/checkout/cart">
                <CheckoutContainer pages={pages} />
              </Route>
              <Redirect from="*" exact to="/checkout/cart" />
            </Switch>
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

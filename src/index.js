import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import './index.css';

import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';

import CheckoutContainer from '~/components/CheckoutContainer';

import pages from '~/utils/pages-data';

const App = () => {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Switch>
            <Route path="/checkout/cart">
              <CheckoutContainer pages={pages} exact />
            </Route>
            <Redirect from="*" exact to="/checkout/cart" />
          </Switch>
        </MemoryRouter>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import './index.css';

import theme from './styles/theme';
import * as serviceWorker from './service-worker';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';

import { LayoutContainer } from './components';

import pages from './pages';

const App = () => {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Switch>
            <Route path="/checkout/cart">
              <LayoutContainer pages={pages} exact />
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

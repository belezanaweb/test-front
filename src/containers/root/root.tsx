import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import CheckoutContainer from '../checkout/checkout';
import { ThemeProvider } from 'styled-components';

const theme = {

  breakpoints: {},

  palette: {

    common: {
      white: '#FFF',
      black: '#000',
    },

    primary: {
      main: '#FF6C00',
      dark: '#D45A00',
      contrastText: '#FFF',
    },

    secondary: {
      main: '#A43287',
    },

    neutral: {
      main: '#212122',
      light: '#E0E7EE',
      lightest: '#E7E7E7',
      medium: '#CCC',
      dark: '#212121',
    },

    support: {
      error: '#F30',
      success: '',
    },

  },

  spacing: {},
}

const Root: React.FC<any> = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/checkout" component={CheckoutContainer} />
        <Route from="*" render={() => <div>Error 404</div>} />
      </Switch>
    </ThemeProvider>
  </Provider>
);

export default Root;

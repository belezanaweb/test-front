import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import CheckoutContainer from '../checkout/checkout';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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

    background: '#EEE',

    support: {
      error: '#F30',
      success: '',
    },

  },

  spacing: {},
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #EEE;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Root: React.FC<any> = ({ store }) => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/checkout" component={CheckoutContainer} />
        <Redirect from="*" to={'/checkout/cart'} />
      </Switch>
    </ThemeProvider>
  </Provider>
);

export default Root;

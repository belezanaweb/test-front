import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import createMockedStore from '~/__mocks__/mocked-store';

import CheckoutConfirmation from '~/pages/CheckoutConfirmation';

import theme from '~/styles/theme';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CheckoutConfirmation />
    </ThemeProvider>
  </Provider>
);

describe('CheckoutConfirmation Page', () => {
  it('should match a snapshot', () => {
    expect(getStyledWrapper(AppWrapper)).toMatchSnapshot();
  });
});

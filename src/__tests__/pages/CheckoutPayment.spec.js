import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import createMockedStore from '~/__mocks__/mocked-store';

import CheckoutPayment from '~/pages/CheckoutPayment';

import theme from '~/styles/theme';

jest.mock('~/store/ducks/checkout/actions', () => ({
  doCheckout: jest.fn().mockImplementation(() => ({
    type: Math.random() * 2
  }))
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  withRouter: jest.fn()
}));

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CheckoutPayment />
    </ThemeProvider>
  </Provider>
);

describe('CheckoutPayment Page', () => {
  it('should match a snapshot', () => {
    expect(getStyledWrapper(AppWrapper)).toMatchSnapshot();
  });
});

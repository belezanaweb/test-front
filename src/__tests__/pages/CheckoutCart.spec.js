import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import createMockedStore from '~/__mocks__/mocked-store';

import CheckoutCart from '~/pages/CheckoutCart';

import theme from '~/styles/theme';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children
  };
});

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CheckoutCart />
    </ThemeProvider>
  </Provider>
);

describe('CheckoutCart Page', () => {
  it('should match a snapshot', () => {
    expect(getStyledWrapper(AppWrapper)).toMatchSnapshot();
  });
});

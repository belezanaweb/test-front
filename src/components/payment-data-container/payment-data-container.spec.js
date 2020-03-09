import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { create } from 'react-test-renderer';

import createMockedStore from '../../lib/test-utils/mocked-store';

import theme from '../../styles/theme';

import PaymentDataContainer from '.';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PaymentDataContainer />
    </ThemeProvider>
  </Provider>
);

describe('PaymentDataContainer', () => {
  it('should match a snapshot', () => {
    expect(create(<AppWrapper />).toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';

import createMockedStore from '~/__mocks__/mocked-store';

import PaymentDataContainer from '~/components/PaymentDataContainer';

import theme from '~/styles/theme';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PaymentDataContainer />
    </ThemeProvider>
  </Provider>
);

describe('PaymentDataContainer Component', () => {
  it('should match a snapshot', () => {
    expect(create(<AppWrapper />).toJSON()).toMatchSnapshot();
  });
});

jest.mock('../../lib/currency', () => ({
  formatToCurrency: jest.fn().mockImplementation(value => `R$ ${value}`)
}));

import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import CartResumeContainer from '.';

import createMockedStore from '../../lib/test-utils/mocked-store';
import theme from '../../styles/theme';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CartResumeContainer />
    </ThemeProvider>
  </Provider>
);

import { formatToCurrency } from '../../lib/currency';

describe('CartResumeContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match a snapshot', () => {
    expect(getStyledWrapperJSON(AppWrapper)).toMatchSnapshot();
  });

  it('should be able to render the component when the store is empty', () => {
    mount(
      <AppWrapper
        store={createMockedStore({
          cart: null
        })}
      />
    );
  });

  it('should call method formatToCurrency four times', () => {
    mount(<AppWrapper />);

    expect(formatToCurrency).toHaveBeenCalledTimes(4);
  });
});

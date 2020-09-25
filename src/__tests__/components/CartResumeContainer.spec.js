import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import createMockedStore from '~/__mocks__/mocked-store';

import CartResumeContainer from '~/components/CartResumeContainer';

import theme from '~/styles/theme';

import { formatToCurrency } from '~/utils/format-currency';

jest.mock('~/utils/format-currency', () => ({
  formatToCurrency: jest.fn().mockImplementation((value) => `R$ ${value}`)
}));

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CartResumeContainer />
    </ThemeProvider>
  </Provider>
);

describe('CartResumeContainer Component', () => {
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

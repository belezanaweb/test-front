import React from 'react';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import CartProductsContainer from '~/components/CartProductsContainer';

import createMockedStore from '~/__mocks__/mocked-store';

import theme from '~/styles/theme';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore, showPrices }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CartProductsContainer showPrices={showPrices} />
    </ThemeProvider>
  </Provider>
);

const TOTAL_PRODUCTS = 3;

describe('CartProductsContainer Component', () => {
  it('should render three Products from store', () => {
    const wrapper = mount(<AppWrapper />);

    expect(wrapper.find('span')).toHaveLength(TOTAL_PRODUCTS);
  });
});

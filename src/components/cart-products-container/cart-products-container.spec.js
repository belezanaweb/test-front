import React from 'react';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import CartProductsContainer from '.';

import createMockedStore from '../../lib/test-utils/mocked-store';

import theme from '../../styles/theme';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CartProductsContainer />
    </ThemeProvider>
  </Provider>
);

const TOTAL = 3;

describe('CartProductsContainer', () => {
  it('should render three Products from store', () => {
    const wrapper = mount(<AppWrapper />);

    expect(wrapper.find('Product')).toHaveLength(TOTAL);
  });
});

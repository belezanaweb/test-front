import React from 'react';
import { MemoryRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import createMockedStore, { initialStore } from '~/__mocks__/mocked-store';

import pages from '~/__mocks__/pages-data';

import CheckoutContainer from '~/components/CheckoutContainer';

import { getCart } from '~/store/ducks/cart/actions';

import theme from '~/styles/theme';

jest.mock('~/store/ducks/cart/actions', () => ({
  getCart: jest.fn().mockImplementation(() => ({
    type: Math.random() * 2
  }))
}));

const mockedStore = createMockedStore({
  ...initialStore,
  loader: {
    show: true
  }
});

const RouterWrapper = ({
  store = mockedStore,
  pageList = pages,
  initialEntries = '/checkout/cart/confirmation'
}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[initialEntries]}>
        <Switch>
          <CheckoutContainer pages={pageList} />
        </Switch>
      </MemoryRouter>
    </ThemeProvider>
  </Provider>
);

describe('CheckoutContainer Component', () => {
  const wrapper = mount(<RouterWrapper />);

  it('should call `getCart` action to get data cart', () => {
    expect(getCart).toHaveBeenCalled();
  });

  it('should render three Routes', () => {
    expect(wrapper.find('Route')).toHaveLength(pages.length);
  });

  it('should render a Skeleton if `loader.show` to be `true`', () => {
    expect(wrapper.find('CheckoutContainer > Skeleton')).toHaveLength(1);
  });

  it('should not render a Skeleton if `loader.show` to be `false`', () => {
    const newWrapper = mount(
      <RouterWrapper
        store={createMockedStore({
          loader: {
            show: false
          }
        })}
      />
    );

    expect(newWrapper.find('CheckoutContainer > Skeleton')).toHaveLength(0);
  });

  describe('Menu Component', () => {
    it('should render a Menu component', () => {
      expect(wrapper.find('Menu')).toHaveLength(1);
    });

    it('should render two Menu items clickable', () => {
      expect(wrapper.find('Menu Link')).toHaveLength(2);
    });

    it('should render a Menu item non clickable', () => {
      expect(wrapper.find('Menu span')).toHaveLength(1);
    });

    it('should render a Menu item non clickable with empty className', () => {
      const newWrapper = mount(<RouterWrapper initialEntries="/checkout/cart" />);
      expect(newWrapper.find('Menu span').hasClass('')).toBe(true);
    });
  });
});

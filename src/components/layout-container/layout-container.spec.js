import React from 'react';
import { MemoryRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import LayoutContainer from '.';

import createMockedStore from '../../lib/test-utils/mocked-store';

import theme from '../../styles/theme';
import pages from '../../pages';

const mockedStore = createMockedStore({
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
          <LayoutContainer pages={pageList} />
        </Switch>
      </MemoryRouter>
    </ThemeProvider>
  </Provider>
);

describe('LayoutContainer', () => {
  const wrapper = mount(<RouterWrapper />);

  it('should render three Routes', () => {
    expect(wrapper.find('Route')).toHaveLength(pages.length);
  });

  it('should render a Skeleton if `loader.show` to be `true`', () => {
    expect(wrapper.find('Layout > SkeletonPage')).toHaveLength(1);
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

    expect(newWrapper.find('Layout > SkeletonPage')).toHaveLength(0);
  });

  describe('#Menu', () => {
    it('should render a Menu component', () => {
      expect(wrapper.find('Menu')).toHaveLength(1);
    });

    it('should render two Menu items clickable', () => {
      expect(wrapper.find('Menu Link')).toHaveLength(2);
    });

    it('should render a Menu item  non clickable', () => {
      expect(wrapper.find('Menu span')).toHaveLength(1);
    });

    it('should render a Menu item non clickable with empty className', () => {
      const newWrapper = mount(<RouterWrapper initialEntries="/checkout/cart" />);
      expect(newWrapper.find('Menu span').hasClass('')).toBe(true);
    });
  });
});

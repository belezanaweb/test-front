import React from 'react';
import { MemoryRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';

import LayoutContainer from '.';

import theme from '../../styles/theme';
import pages from '../../pages';

const RouterWrapper = ({ pageList = pages, initialEntries = '/checkout/cart/confirmation' }) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={[initialEntries]}>
      <Switch>
        <LayoutContainer pages={pageList} />
      </Switch>
    </MemoryRouter>
  </ThemeProvider>
);

describe('LayoutContainer', () => {
  const wrapper = mount(<RouterWrapper />);

  describe('#Menu', () => {
    it('should render a Menu component', () => {
      expect(wrapper.find('Menu')).toHaveLength(1);
    });

    it('should render 2 Menu items clickable', () => {
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

  it('should render 3 routes', () => {
    expect(wrapper.find('Route')).toHaveLength(pages.length);
  });
});

import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import { MemoryRouter, NavLink } from 'react-router-dom'

import CartSteps from './CartSteps';

configure({ adapter: new Adapter() });

it('should have 1 enabled link', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/checkout/cart']} >
      <CartSteps />
    </MemoryRouter>
  );

  expect(component.find(NavLink)).toHaveLength(1)
})

it('should have 2 enabled links', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/checkout/payment']} >
      <CartSteps />
    </MemoryRouter>
  );

  expect(component.find(NavLink)).toHaveLength(2)
})

it('should have 1 enabled link', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/checkout/placed']} >
      <CartSteps />
    </MemoryRouter>
  );

  expect(component.find(NavLink)).toHaveLength(1)
})

import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import CheckoutNavbar, { CheckoutNavbarItem } from './index';

describe('<CheckoutNavbar />', () => {
  it('should render component with <div> tag', () => {
    render(<CheckoutNavbar><CheckoutNavbarItem>Item</CheckoutNavbarItem></CheckoutNavbar>, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<CheckoutNavbar><CheckoutNavbarItem>Item</CheckoutNavbarItem></CheckoutNavbar>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

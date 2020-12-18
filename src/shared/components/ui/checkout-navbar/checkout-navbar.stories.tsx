import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { ICheckoutNavbarProps } from './checkout-navbar.interface';
import { CheckoutNavbar } from './checkout-navbar.component';
import { CheckoutNavbarItem } from './checkout-navbar-item.component';

export default {
  title: 'Checkout Navbar',
  component: CheckoutNavbar,
};

const Template: Story<ICheckoutNavbarProps> = (args) => <CheckoutNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <CheckoutNavbar>
      <>
        <CheckoutNavbarItem>Test 1</CheckoutNavbarItem>
        <CheckoutNavbarItem selected={true}>Test 2</CheckoutNavbarItem>
        <CheckoutNavbarItem>Test 3</CheckoutNavbarItem>
      </>
    </CheckoutNavbar>
  ),
};

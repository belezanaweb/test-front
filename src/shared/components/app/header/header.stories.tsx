import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IHeaderProps } from './header.interface';
import { Header } from './header.component';

import CheckoutNavbar, { CheckoutNavbarItem } from '../../ui/checkout-navbar';

export default {
  title: 'Header',
  component: Header,
};

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <CheckoutNavbar>
      <>
        <CheckoutNavbarItem>Sacola</CheckoutNavbarItem>
        <CheckoutNavbarItem selected={true}>Pagamento</CheckoutNavbarItem>
        <CheckoutNavbarItem>Confirmação</CheckoutNavbarItem>
      </>
    </CheckoutNavbar>
  ),
};

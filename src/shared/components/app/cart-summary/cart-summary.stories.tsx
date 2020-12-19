import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { ICartSummaryProps } from './cart-summary.interface';
import { CartSummary } from './cart-summary.component';

export default {
  title: 'Cart Summary',
  component: CartSummary,
};

const Template: Story<ICartSummaryProps> = (args) => <CartSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9,
};

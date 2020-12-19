import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { ICartSummaryProps } from './cart-summary.interface';
import { CartSummary } from './cart-summary.component';

import utils from '../../../utils';

export default {
  title: 'Cart Summary',
  component: CartSummary,
};

const Template: Story<ICartSummaryProps> = (args) => <CartSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  subTotal: utils.format.currency.toBRL(6624.8),
  shippingTotal: utils.format.currency.toBRL(65.3),
  discount: utils.format.currency.toBRL(630),
  total: utils.format.currency.toBRL(6618.9),
};

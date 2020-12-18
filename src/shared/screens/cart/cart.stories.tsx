import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import Cart from './cart-component';

export default {
  title: 'Cart Page',
  component: Cart,
};

const Template: Story = (args) => <Cart {...args} />;

export const Default = Template.bind({});

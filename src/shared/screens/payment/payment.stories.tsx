import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import Payment from './payment-component';

export default {
  title: 'Payment Page',
  component: Payment,
};

const Template: Story = (args) => <Payment {...args} />;

export const Default = Template.bind({});

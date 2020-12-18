import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { PaymentForm } from './payment-form.component';

export default {
  title: 'Payment Form',
  component: PaymentForm,
};

const Template: Story = (args) => <PaymentForm {...args} />;

export const Default = Template.bind({});

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IPaymentSummaryProps } from './payment-summary.interface';
import { PaymentSummary } from './payment-summary.component';

export default {
  title: 'Payment Summary',
  component: PaymentSummary,
};

const Template: Story<IPaymentSummaryProps> = (args) => <PaymentSummary {...args} />;

export const Default = Template.bind({});
Default.args = { creditCardNumber: '****.****.****.1234', name: 'José da Silva', expires: '05/2019' };

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import Success from './success-component';

export default {
  title: 'Success Page',
  component: Success,
};

const Template: Story = (args) => <Success {...args} />;

export const Default = Template.bind({});

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IFormProps } from './form.interface';
import { Form } from './form.component';

export default {
  title: 'Form',
  component: Form,
};

const Template: Story<IFormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Form',
};

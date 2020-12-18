import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { ITitleProps } from './title.interface';
import { Title } from './title.component';

export default {
  title: 'Title',
  component: Title,
};

const Template: Story<ITitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
  tag: 'h3',
};

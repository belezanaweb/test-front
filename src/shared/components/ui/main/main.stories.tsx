import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IMainProps } from './main.interface';
import { Main } from './main.component';

export default {
  title: 'Main',
  component: Main,
};

const Template: Story<IMainProps> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
};

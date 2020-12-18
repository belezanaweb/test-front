import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IPanelProps } from './panel.interface';
import { Panel } from './panel.component';

import Title from '../title';

export default {
  title: 'Panel',
  component: Panel,
};

const Template: Story<IPanelProps> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: <Title>Test</Title>,
  children: 'Panel',
};

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IGridProps } from './grid.interface';
import { Grid } from './grid.component';

export default {
  title: 'Grid',
  component: Grid,
};

const Template: Story<IGridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Grid',
};

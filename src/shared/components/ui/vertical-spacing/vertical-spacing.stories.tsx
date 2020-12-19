import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IVerticalSpacingProps } from './vertical-spacing.interface';
import { VerticalSpacing } from './vertical-spacing.component';

export default {
  title: 'Vertical Spacing',
  component: VerticalSpacing,
};

const Template: Story<IVerticalSpacingProps> = (args) => (
  <>
    <VerticalSpacing {...args} />
    <VerticalSpacing {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
  size: 'medium',
};

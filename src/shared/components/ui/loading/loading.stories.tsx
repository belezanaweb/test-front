import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { ILoadingProps } from './loading.interface';
import { Loading } from './loading.component';

export default {
  title: 'Loading',
  component: Loading,
};

const Template: Story<ILoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});

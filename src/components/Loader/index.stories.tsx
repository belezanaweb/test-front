import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import { Loader } from './index';

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <ThemeProvider theme={theme}>
    <Loader />
  </ThemeProvider>
);

export const Component = Template.bind({});

Component.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import { Input } from './index';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
);

export const Component = Template.bind({});

Component.args = {
  label: 'Label text',
  placeholder: 'Input placeholder',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <MemoryRouter initialEntries={['/']}>
    <ThemeProvider theme={theme}>
      <Button to={args.to}>
        {args.children}
      </Button>
    </ThemeProvider>
  </MemoryRouter>
);

export const Component = Template.bind({});

Component.args = {
  to: '/',
  children: 'Text Button',
};

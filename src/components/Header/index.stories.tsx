import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import { Header } from './index';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <MemoryRouter initialEntries={['/checkout/cart']}>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </MemoryRouter>
);

export const Component = Template.bind({});

Component.args = {};

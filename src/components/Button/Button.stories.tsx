import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import Button from './Button';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Button,
  decorators: [Provider],
  title: 'Button',
};

export const Default = () => (
  <Box css={{ padding: '20px' }}>
    <Button>Efetuar Pagamento</Button>
  </Box>
);

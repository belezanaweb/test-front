import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import Card from './Card';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Card,
  decorators: [Provider],
  title: 'Card',
};

export const Default = () => (
  <Box css={{ padding: '20px' }}>
    <Card>&nbsp;</Card>
  </Box>
);

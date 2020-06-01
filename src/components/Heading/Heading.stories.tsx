import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import Heading from './Heading';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Heading,
  decorators: [Provider],
  title: 'Heading',
};

export const Default = () => (
  <Box css={{ padding: '20px' }}>
    <Heading>The quick brown fox jumps over the lazy dog</Heading>
  </Box>
);

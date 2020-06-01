import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import Text from './Text';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Text,
  decorators: [Provider],
  title: 'Text',
};

export const Default = () => (
  <Box css={{ padding: '20px' }}>
    <Text>The quick brown fox jumps over the lazy dog</Text>
  </Box>
);

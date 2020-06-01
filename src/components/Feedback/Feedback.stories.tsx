import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import Feedback from './Feedback';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Feedback,
  decorators: [Provider],
  title: 'Feedback',
};

export const Default = () => (
  <Box css={{ alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
    <Feedback>You winner!</Feedback>
  </Box>
);

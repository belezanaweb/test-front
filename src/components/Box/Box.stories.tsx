import React from 'react';

import theme, { Theming } from '../../theme';

import Box from './Box';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Box,
  decorators: [Provider],
  title: 'Box',
};

export const Custom = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <Box css={{
      border: '1px dashed red',
      borderRadius: '50%',
      height: '80px',
      width: '80px',
    }}>&nbsp;</Box>
  </Box>
);

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import Steps from './Steps';

const Provider = (storyFn: () => React.ReactNode) => (
  <BrowserRouter>
    <Theming theme={theme}>
      {storyFn()}
    </Theming>
  </BrowserRouter>
);

export default {
  component: Steps,
  decorators: [Provider],
  title: 'Steps',
};

export const Default = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <Steps />
  </Box>
);

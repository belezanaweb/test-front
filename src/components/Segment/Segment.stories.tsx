import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme, { Theming } from '../../theme';

import Box from '../Box';
import Text from '../Text';

import Segment from './Segment';

const Provider = (storyFn: () => React.ReactNode) => (
  <BrowserRouter>
    <Theming theme={theme}>
      {storyFn()}
    </Theming>
  </BrowserRouter>
);

export default {
  component: Segment,
  decorators: [Provider],
  title: 'Segment',
};

export const Default = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <Segment>
      <Text>This is a segment</Text>
    </Segment>
  </Box>
);

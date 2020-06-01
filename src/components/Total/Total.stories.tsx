import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';
import Total from './Total';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: Total,
  decorators: [Provider],
  title: 'Total',
};

const data = {
  discount: 30,
  shippingTotal: 5.3,
  subTotal: 624.8,
  total: 618.9
};

export const Default = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <Total data={data} />
  </Box>
);

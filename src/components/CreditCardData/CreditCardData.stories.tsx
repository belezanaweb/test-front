import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import CreditCardData from './CreditCardData';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: CreditCardData,
  decorators: [Provider],
  title: 'CreditCardData',
};

const data = {
  expiringDate: '10/2020',
  name: 'John Joe',
  number: '4305',
};

export const Default = () => (
  <Box css={{ padding: '20px' }}>
    <CreditCardData {...data} />
  </Box>
);

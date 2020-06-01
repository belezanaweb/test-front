import React from 'react';

import theme, { Theming } from '../../theme';

import Box from '../Box';
import TextField from './TextField';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: TextField,
  decorators: [Provider],
  title: 'TextField',
};

export const Default = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <TextField
      label="First Name"
      name="firstName"
      placeholder="Only your first name"
    />
  </Box>
);

export const WithError = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <TextField
      label="Full Name"
      name="fullName"
      error="Name cannot be number"
      value="X Æ A-12"
    />
  </Box>
);

export const WithMask = () => (
  <Box css={{ display: 'block', padding: '20px' }}>
    <TextField
      label="Credit Card Number"
      mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      name="creditCardNumber"
      value="5507669573398053"
    />
  </Box>
);

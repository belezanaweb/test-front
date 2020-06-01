import React from 'react';
import { action } from '@storybook/addon-actions';

import theme, { Theming } from '../../theme';

import Box from '../Box';

import CreditCardForm from './CreditCardForm';
import CreditCardFormController from './CreditCardFormController';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: CreditCardForm,
  decorators: [Provider],
  title: 'CreditCardForm',
};

export const Default = () => (
  <Box css={{ padding: '20px' }}>
    <CreditCardFormController onSubmit={action('submit')}>
      {() => (
        <>
          <CreditCardForm />
          <button type="submit">Submit</button>
        </>
      )}
    </CreditCardFormController>
  </Box>
);

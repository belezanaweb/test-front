import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Box from './Box';

it('should render Box', () => {
  const { getByText } = render((
    <Box>Content Wrapped</Box>
  ));
  expect('Content Wrapped').toBeInTheDocument();
});
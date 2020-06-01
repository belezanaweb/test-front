import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Box from './Box';

describe('<Box />', () => {
  it('should render Box', () => {
    const { container } = render(<Box>Box</Box>);

    expect(container)
      .toHaveTextContent('Box');
  });
});

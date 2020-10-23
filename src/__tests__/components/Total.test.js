import React from 'react';
import { render } from '@testing-library/react';

import Total from '../../components/Total';

describe('Total component', () => {
  it('should render total values', () => {
    const { getByTestId } = render(<Total />);

    expect(getByTestId('total')).not.toBeNull();
  });
});

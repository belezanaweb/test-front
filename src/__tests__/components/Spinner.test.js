import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '../../components/Spinner';

describe('Spinner component', () => {
  it('should render spinner element', () => {
    const { getByTestId } = render(<Spinner />);

    expect(getByTestId('spinner')).not.toBeNull();
  });
});

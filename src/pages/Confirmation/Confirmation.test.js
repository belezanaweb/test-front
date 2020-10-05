import React from 'react';
import { render } from '@testing-library/react';

import Confirmation from './Confirmation';

describe('Confirmation Page', () => {
  test('Renders with title', async () => {
    const { asFragment, getByText } = render(<Confirmation />);
    expect(getByText('Confirmação')).toBeInTheDocument();


    expect(asFragment()).toMatchSnapshot();
  });
});
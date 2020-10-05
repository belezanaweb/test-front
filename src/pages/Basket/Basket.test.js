import React from 'react';
import { render } from '@testing-library/react';

import Basket from './Basket';

describe('Basket Page', () => {
  test('Renders with title', async () => {
    const { asFragment, getByText } = render(<Basket />);
    expect(getByText('Sacola')).toBeInTheDocument();


    expect(asFragment()).toMatchSnapshot();
  });
});
import React from 'react';
import { render } from '@testing-library/react';

import Payment from './Payment';

describe('Payment Page', () => {
  test('Renders with title', async () => {
    const { asFragment, getByText } = render(<Payment />);
    expect(getByText('Pagamento')).toBeInTheDocument();


    expect(asFragment()).toMatchSnapshot();
  });
});
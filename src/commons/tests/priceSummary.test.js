import React from 'react';
import { render } from '@testing-library/react';
import { PriceSummary } from '../priceSummary';

describe('Price Summary', () => {
  it('Should render the price summary', async () => {
    const { getByText } = render(
      <PriceSummary subTotal={10.47} shippingTotal={15} discount={20.6} total={25.99} />
    );
    expect(getByText('R$ 10,47')).not.toBeNull();
    expect(getByText('R$ 15,00')).not.toBeNull();
    expect(getByText('- R$ 20,60')).not.toBeNull();
    expect(getByText('R$ 25,99')).not.toBeNull();
  });
});

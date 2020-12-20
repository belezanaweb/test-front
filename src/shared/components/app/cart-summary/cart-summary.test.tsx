import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import CartSummary from './index';

const mock = {
  subTotal: 'R$ 6.624,80',
  shippingTotal: 'R$ 65,30',
  discount: 'R$ 630,00',
  total: 'R$ 6.618,90',
}

describe('<CartSummary />', () => {
  it('should render component with <div> tag', () => {
    render(<CartSummary {...mock} />, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<CartSummary {...mock} />, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

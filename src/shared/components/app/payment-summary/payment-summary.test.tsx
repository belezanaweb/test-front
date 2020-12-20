import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import PaymentSummary from './index';

const mock = {
  creditCardNumber: '****.****.****.1234',
  name: 'José da Silva',
  expires: '05/2019'
};

describe('<PaymentSummary />', () => {
  it('should render component with <div> tag', () => {
    render(<PaymentSummary {...mock} />, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<PaymentSummary {...mock} />, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

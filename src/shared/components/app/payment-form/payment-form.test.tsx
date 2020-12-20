import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import PaymentForm from './index';

describe('<PaymentForm />', () => {
  it('should render component with <form> tag', () => {
    render(<PaymentForm />, {});
    expect(screen.getByRole('form'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<PaymentForm />, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

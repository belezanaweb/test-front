import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Form from './index';

describe('<Form />', () => {
  it('should render component with <form> tag', () => {
    render(<Form onSubmit={() => {}}>From</Form>, {});
    expect(screen.getByRole('form'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Form onSubmit={() => {}}>From</Form>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

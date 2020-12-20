import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Button from './index';

describe('<Button />', () => {
  it('should render component with <button> tag', () => {
    render(<Button>button</Button>, {});
    expect(screen.getByRole('button'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Button>button</Button>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

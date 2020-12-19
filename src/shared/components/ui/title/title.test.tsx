import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Title from './index';

describe('<Title />', () => {
  it('should render component with <h1> tag', () => {
    render(<Title>Title</Title>, {});
    expect(screen.findByRole('h1'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Title>Title</Title>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

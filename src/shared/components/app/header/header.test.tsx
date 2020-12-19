import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Header from './index';

describe('<Header />', () => {
  it('should render component with <header> tag', () => {
    render(<Header>Header</Header>, {});
    expect(screen.findByRole('header'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Header>Header</Header>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

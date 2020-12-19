import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Loading from './index';

describe('<Loading />', () => {
  it('should render component with <div> tag', () => {
    render(<Loading />, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Loading />, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import VerticalSpacing from './index';

describe('<VerticalSpacing />', () => {
  it('should render component with <div> tag', () => {
    render(<VerticalSpacing>VerticalSpacing</VerticalSpacing>, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<VerticalSpacing>VerticalSpacing</VerticalSpacing>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

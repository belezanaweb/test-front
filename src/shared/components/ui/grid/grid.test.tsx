import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Grid from './index';

describe('<Grid />', () => {
  it('should render component with <div> tag', () => {
    render(<Grid>Grid</Grid>, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Grid>Grid</Grid>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

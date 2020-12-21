import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Grid, { GridCol } from './index';

describe('<Grid />', () => {
  it('should render Grid component with <div> tag', () => {
    render(<Grid>Grid</Grid>, {});
    expect(screen.findByRole('div'));
  })

  it('should render GridCol component with <div> tag', () => {
    render(<GridCol>GridCol</GridCol>, {});
    expect(screen.findByRole('div'));
  })

  it('should render Grid component with default props and match snapshot', () => {
    const { container } = render(<Grid>Grid</Grid>, {});
    expect(container.firstChild).toMatchSnapshot();
  })

  it('should render GridCol component with default props and match snapshot', () => {
    const { container } = render(<GridCol>GridCol</GridCol>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

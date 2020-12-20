import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Panel from './index';

describe('<Panel />', () => {
  it('should render component with <div> tag', () => {
    render(<Panel>Panel</Panel>, {});
    expect(screen.findByRole('div'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Panel>Panel</Panel>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

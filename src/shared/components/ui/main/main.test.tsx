import React from 'react';
import { render, screen } from '../../../../../config/test-utils';

import Main from './index';

describe('<Main />', () => {
  it('should render component with <main> tag', () => {
    render(<Main>Main</Main>, {});
    expect(screen.getByRole('main'));
  })

  it('should render component with default props and match snapshot', () => {
    const { container } = render(<Main>Main</Main>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

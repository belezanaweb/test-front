import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '../../theme';

import { Button } from './index';

describe('Button component tests', () => {
  it('should render Button component without error', () => {
    const { getByText } = render(
      <Theme>
        <Button to="#">
          Testing Button
        </Button>
      </Theme>,
      { wrapper: MemoryRouter }
    );

    const element = getByText('Testing Button');
    expect(element).toBeInTheDocument();
  });
});

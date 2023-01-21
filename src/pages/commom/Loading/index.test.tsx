import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '../../../theme';

import { Loading } from './index';

describe('Loading component tests', () => {
  it('should render Loading component without error', () => {
    const { getByText } = render(
      <Theme>
        <Loading />
      </Theme>,
      { wrapper: MemoryRouter }
    );

    const element = getByText('Sacola');
    expect(element).toBeInTheDocument();
  });
});

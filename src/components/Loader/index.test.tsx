import { render } from '@testing-library/react';
import { Theme } from '../../theme';

import { Loader } from './index';

describe('Loading component tests', () => {
  it('should render Loading component without error', () => {
    const { queryByText } = render(
      <Theme>
        <Loader />
      </Theme>,
    );

    const element = queryByText('Sacola');
    expect(element).not.toBeInTheDocument();
  });
});

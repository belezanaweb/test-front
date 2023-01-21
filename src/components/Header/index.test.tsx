import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from '../../theme';

import { Header } from './index';

describe('Header component tests', () => {
  it('should render Header component without error', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/checkout/cart']}>
        <Theme>
          <Header />
        </Theme>
      </MemoryRouter>
    );

    const element = getByText('Sacola');
    expect(element).toBeInTheDocument();
  });
});

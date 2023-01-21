import { render } from '@testing-library/react';
import Theme from '../../../theme';
import Home from './index';

vi.mock('../../../components/Button', () => ({
  Button: () => (
    <a>
      button
    </a>
  )
}));

describe('Home component tests', () => {
  it('should render Home component without error', () => {
    const { getByText } = render(
      <Theme>
        <Home />
      </Theme>
    );

    const element = getByText('Olá!');
    expect(element).toBeInTheDocument();
  });
});

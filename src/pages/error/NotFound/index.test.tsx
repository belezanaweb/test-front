import { render } from '@testing-library/react';
import Theme from '../../../theme';
import NotFound from './index';

vi.mock('../../../components/Button', () => ({
  Button: () => (
    <a>
      button
    </a>
  )
}));

describe('NotFound component tests', () => {
  it('should render NotFound component without error', () => {
    const { getByText } = render(
      <Theme>
        <NotFound />
      </Theme>
    );

    const element = getByText('404');
    expect(element).toBeInTheDocument();
  });
});

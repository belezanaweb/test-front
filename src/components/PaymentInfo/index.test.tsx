import { render } from '@testing-library/react';
import { Theme } from '../../theme';

import { PaymentInfo } from './index';

describe('PaymentInfo component tests', () => {
  it('should render PaymentInfo component without error', () => {
    const { getByText } = render(
      <Theme>
        <PaymentInfo />
      </Theme>
    );

    const element = getByText('Fulano de Tal');
    expect(element).toBeInTheDocument();
  });
});

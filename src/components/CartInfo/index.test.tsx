import { render } from '@testing-library/react';
import { Theme } from '../../theme';

import { CartInfo } from './index';

describe('CartInfo component tests', () => {
  it('should render CartInfo component without error', () => {
    const subTotal = 200;
    const discount = 30;
    const shippingTotal = 10;

    const { getByText } = render(
      <Theme>
        <CartInfo
          subTotal={subTotal}
          discount={discount}
          shippingTotal={shippingTotal}
        />
      </Theme>
    );

    const element = getByText('R$ 180,00');
    expect(element).toBeInTheDocument();
  });
});

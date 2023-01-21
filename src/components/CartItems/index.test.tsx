import { render } from '@testing-library/react';
import { Theme } from '../../theme';

import { CartItems } from './index';
import { items } from '../../services/hooks/cart/items.mock';

vi.mock('react-resize-detector');

describe('CartItems component tests', async () => {
  const resizeDetector = await import('react-resize-detector');

  it('should render CartItems component cart page view without error', () => {
    resizeDetector.useResizeDetector = vi.fn().mockReturnValue(({ width: 600 }));

    const { getByText } = render(
      <Theme>
        <CartItems items={items} />
      </Theme>
    );

    const element = getByText(items[1].product.name);
    expect(element).toBeInTheDocument();
  });

  it('should render CartItems component as confirmation page view without error', () => {
    resizeDetector.useResizeDetector = vi.fn().mockReturnValue(({ width: 300 }));

    const { getByText } = render(
      <Theme>
        <CartItems items={items} isConfirmationOnly={true} />
      </Theme>
    );

    const element = getByText(items[1].product.name);
    expect(element).toBeInTheDocument();
  });
});

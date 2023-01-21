import { render } from '@testing-library/react';
import { response } from '../../../services/hooks/cart/response.mock';
import { useCartProducts } from '../../../services/hooks/cart/useCartProducts';
import Theme from '../../../theme';
import Cart from './index';


vi.mock('../../../components/Header', () => ({
  Header: () => (
    <header>
      header
    </header>
  )
}));

vi.mock('../../../components/CartItems', () => ({
  CartItems: () => (
    <div>
      cart items
    </div>
  )
}));

vi.mock('../../../components/CartInfo', () => ({
  CartInfo: () => (
    <div>
      cart info
    </div>
  )
}));

vi.mock('../../../components/Button', () => ({
  Button: () => (
    <a>
      button
    </a>
  )
}));

vi.mock('../../../services/hooks/cart/useCartProducts');

describe('Cart component tests', () => {
  const mockUseCartProducts = useCartProducts as jest.MockedFunction<typeof useCartProducts>;

  it('should render Cart component loading', () => {
    mockUseCartProducts.mockReturnValue({
      data: response,
      isLoading: true,
      hasError: false
    });

    const { getByText } = render(
      <Theme>
        <Cart />
      </Theme>
    );

    const element = getByText('header');
    expect(element).toBeInTheDocument();
  });

  it('should render Cart component with data', () => {
    mockUseCartProducts.mockReturnValue({
      data: response,
      isLoading: false,
      hasError: false
    });

    const { getByText } = render(
      <Theme>
        <Cart />
      </Theme>
    );

    const element = getByText('cart info');
    expect(element).toBeInTheDocument();
  });
});

import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { response } from '../../../services/hooks/cart/response.mock';
import { useCartProducts } from '../../../services/hooks/cart/useCartProducts';
import Theme from '../../../theme';
import Payment from './index';


vi.mock('../../../components/Header', () => ({
  Header: () => (
    <header>
      header
    </header>
  )
}));

vi.mock('../../../components/PaymentForm', () => ({
  PaymentForm: () => (
    <div>
      payment form
    </div>
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

vi.mock('../../../services/hooks/cart/useCartProducts');

vi.mock("react-router", () => ({
  useNavigate: () => vi.fn(),
}));

describe('Payment component tests', () => {
  const mockUseCartProducts = useCartProducts as jest.MockedFunction<typeof useCartProducts>;

  it('should render Payment component without loading', () => {
    mockUseCartProducts.mockReturnValue({
      data: response,
      isLoading: true,
      hasError: false
    });

    const { getByText } = render(
      <Theme>
        <Payment />
      </Theme>,
      { wrapper: MemoryRouter }
    );

    const element = getByText('header');
    expect(element).toBeInTheDocument();
  });

  it('should render Payment component with data', () => {
    mockUseCartProducts.mockReturnValue({
      data: response,
      isLoading: false,
      hasError: false
    });

    const { getByText } = render(
      <Theme>
        <Payment />
      </Theme>,
      { wrapper: MemoryRouter }
    );

    const button = getByText('Finalizar o pedido');
    fireEvent.click(button);

    const element = getByText('cart info');
    expect(element).toBeInTheDocument();
  });
});

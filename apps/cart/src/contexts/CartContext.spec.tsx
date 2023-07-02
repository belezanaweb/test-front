import { render, waitFor } from '@testing-library/react';

import api from '../services/api';
import CartProvider, { CartContext } from './CartContext';

jest.mock('../services/api', () => ({
  getCurrentCart: jest.fn(),
}));

describe('CartProvider', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    const mockCart = { id: 1, items: [] };
    (api.getCurrentCart as jest.Mock).mockResolvedValue(mockCart);
  });

  it('should provide the cart context with initial values', async () => {
    const { getByText } = render(
      <CartProvider>
        <CartContext.Consumer>
          {({ cart, creditCard }) => (
            <div>
              <span>Cart: {cart?.id || 'cart_empty'}</span>
              <span>
                Credit Card: {creditCard?.number || 'credit_card_empty'}
              </span>
            </div>
          )}
        </CartContext.Consumer>
      </CartProvider>,
    );

    await waitFor(() => {
      expect(getByText('Cart: cart_empty')).toBeInTheDocument();
      expect(getByText('Credit Card: credit_card_empty')).toBeInTheDocument();
    });
  });

  it('should fetch the current cart on mount', async () => {
    const { getByText } = render(
      <CartProvider>
        <CartContext.Consumer>
          {({ cart }) => <span>Cart: {cart?.id}</span>}
        </CartContext.Consumer>
      </CartProvider>,
    );

    await waitFor(() => {
      expect(api.getCurrentCart).toHaveBeenCalledTimes(1);
      expect(getByText('Cart: 1')).toBeInTheDocument();
    });
  });

  it('should set the cart to undefined on fetch error', async () => {
    (api.getCurrentCart as jest.Mock).mockRejectedValue(new Error('Api error'));

    const { getByText } = render(
      <CartProvider>
        <CartContext.Consumer>
          {({ cart }) => <span>Cart: {cart?.id || 'cart_empty'}</span>}
        </CartContext.Consumer>
      </CartProvider>,
    );

    await waitFor(() => {
      expect(api.getCurrentCart).toHaveBeenCalledTimes(1);
      expect(getByText('Cart: cart_empty')).toBeInTheDocument();
    });
  });

  it('should update the credit card state', async () => {
    const creditCardData = {
      cvv: '123',
      number: '1234',
      expireDate: '12/21',
      holder: 'John Doe',
    };

    const { getByText } = render(
      <CartProvider>
        <CartContext.Consumer>
          {({ creditCard, setCreditCard }) => (
            <div>
              <span>
                Credit Card: {creditCard?.number || 'credit_card_empty'}
              </span>
              <button
                type="button"
                onClick={() => setCreditCard(creditCardData)}
              >
                Set Credit Card
              </button>
            </div>
          )}
        </CartContext.Consumer>
      </CartProvider>,
    );

    expect(getByText('Credit Card: credit_card_empty')).toBeInTheDocument();

    getByText('Set Credit Card').click();

    await waitFor(() => {
      expect(getByText('Credit Card: 1234')).toBeInTheDocument();
    });
  });
});

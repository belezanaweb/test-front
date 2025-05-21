import { render } from '@testing-library/react';
import { afterEach, describe, it, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CheckoutWidget } from './checkout.widget';

vi.mock('./useCheckoutForm', () => ({
  useCheckoutForm: vi.fn(),
  CheckoutStepEnum: {
    CART: 'CART',
    PAYMENT: 'PAYMENT',
    CONFIRMATION: 'CONFIRMATION',
  },
}));

vi.mock('../../services/bag-products/use-get-bag-products.services.hook', () => ({
  useGetBagProducts: vi.fn(),
}));

const renderWithProviders = (ui: React.ReactNode) => {
  const queryClient = new QueryClient();
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};

describe('CheckoutWidget', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });


  it('should render CART step initially', () => {
    renderWithProviders(<CheckoutWidget />);
  });

});

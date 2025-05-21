import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';

import { CheckoutStepEnum } from '../../widgets/checkout/useCheckoutForm';
import { CheckoutHeader } from './checkout-header.component';

describe('CheckoutHeader', () => {
  const mockHandleTab = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all steps with correct labels', () => {
    render(
      <CheckoutHeader
        currentStep={CheckoutStepEnum.CART}
        handleTab={mockHandleTab}
      />
    );

    expect(screen.getByText('Sacola')).toBeInTheDocument();
    expect(screen.getByText('Pagamento')).toBeInTheDocument();
    expect(screen.getByText('Confirmação')).toBeInTheDocument();
  });

  it('highlights the current tab correctly', () => {
    const { container } = render(
      <CheckoutHeader
        currentStep={CheckoutStepEnum.PAYMENT}
        handleTab={mockHandleTab}
      />
    );

    const activeTab = container.querySelector('.stepItem.active');
    expect(activeTab).toHaveTextContent('Pagamento');
  });

  it('calls handleTab with the correct value when clicking on a tab', () => {
    render(
      <CheckoutHeader
        currentStep={CheckoutStepEnum.CART}
        handleTab={mockHandleTab}
      />
    );

    fireEvent.click(screen.getByText('Confirmação'));
    expect(mockHandleTab).toHaveBeenCalledWith('confirmation');
  });
});

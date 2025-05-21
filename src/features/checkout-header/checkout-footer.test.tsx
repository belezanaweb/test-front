import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';

import { CheckoutStepEnum } from '../../widgets/checkout/useCheckoutForm';
import { CheckoutHeader } from './checkout-header.component';

describe('CheckoutHeader', () => {
  const mockHandleTab = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza todos os passos com os rótulos corretos', () => {
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

  it('destaca a aba atual corretamente', () => {
    const { container } = render(
      <CheckoutHeader
        currentStep={CheckoutStepEnum.PAYMENT}
        handleTab={mockHandleTab}
      />
    );

    const activeTab = container.querySelector('.stepItem.active');
    expect(activeTab).toHaveTextContent('Pagamento');
  });

  it('chama handleTab com o valor correto ao clicar em uma aba', () => {
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

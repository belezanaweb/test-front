import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach } from 'vitest';

import { CheckoutStepEnum } from '../../widgets/checkout/useCheckoutForm';
import { CheckoutFooter } from './checkout-footer.component';

vi.mock('react-hook-form');

describe('CheckoutFooter', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays correctly formatted values', () => {
    render(
      <CheckoutFooter
        totalWithoutFreight={200}
        shippingTotal={30}
        discount={20}
        total={210}
        itemCount={3}
        onProceed={() => { }}
        currentStep={CheckoutStepEnum.CART}
      />
    );

    expect(screen.getByText('Produtos: (3) itens')).toBeInTheDocument();
    expect(screen.getByText('R$ 200.00')).toBeInTheDocument();
    expect(screen.getByText('Frete:')).toBeInTheDocument();
    expect(screen.getByText('R$ 30.00')).toBeInTheDocument();
    expect(screen.getByText('Desconto:')).toBeInTheDocument();
    expect(screen.getByText('R$ 20.00')).toBeInTheDocument();
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('R$ 210.00')).toBeInTheDocument();
  });

  it('displays the button with the correct label according to the step', () => {

    render(
      <CheckoutFooter
        totalWithoutFreight={0}
        shippingTotal={0}
        discount={0}
        total={0}
        itemCount={0}
        onProceed={() => { }}
        currentStep={CheckoutStepEnum.PAYMENT}
      />
    );

    expect(screen.getByRole('button', { name: /finalizar pedido/i })).toBeInTheDocument();
  });

  it('adds confirmation class when step is CONFIRMATION', () => {

    render(
      <CheckoutFooter
        totalWithoutFreight={0}
        shippingTotal={0}
        discount={0}
        total={0}
        itemCount={0}
        onProceed={() => { }}
        currentStep={CheckoutStepEnum.CONFIRMATION}
      />
    );

    const button = screen.getByRole('button', { name: /voltar ao inicio/i });
    expect(button).toHaveClass('confirmation');
  });

  it('calls onProceed when button is clicked', () => {
    const handleClick = vi.fn();

    render(
      <CheckoutFooter
        totalWithoutFreight={0}
        shippingTotal={0}
        discount={0}
        total={0}
        itemCount={0}
        onProceed={handleClick}
        currentStep={CheckoutStepEnum.CART}
      />
    );

    const button = screen.getByRole('button', { name: /seguir para o pagamento/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

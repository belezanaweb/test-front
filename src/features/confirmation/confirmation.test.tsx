import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Confirmation } from './confirmation.component';
import { MOCK_BAG } from '../../test/mocks/bag-products.mock';

describe('Confirmation component', () => {
  it('must render payment information and product list', () => {
    render(
      <Confirmation
        bag={MOCK_BAG}
        cardNumber="1234567890123456"
        cardHolder="João da Silva"
        expiryDate="12/25"
      />
    );

    expect(screen.getByText('Compra efetuada com sucesso')).toBeTruthy()
    expect(screen.getByText('****.****.****.3456')).toBeTruthy();
    expect(screen.getByText('João da Silva')).toBeTruthy();
    expect(screen.getByText('12/25')).toBeTruthy();
    expect(screen.getByText('Produto 1')).toBeTruthy();
  });

  it('should show default mask if cardNumber is less than 4 digits', () => {
    render(
      <Confirmation
        bag={MOCK_BAG}
        cardNumber="123"
        cardHolder="João da Silva"
        expiryDate="12/25"
      />
    );

    expect(screen.getByText('****.****.****.123')).toBeTruthy();
  });

  it('should handle cardNumber undefined without breaking', () => {
    render(
      <Confirmation
        bag={MOCK_BAG}
        cardHolder="João da Silva"
        expiryDate="12/25"
      />
    );

    expect(screen.getByText('****.****.****.')).toBeTruthy();
  });
});

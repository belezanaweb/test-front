import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Confirmation } from './confirmation.component';
import { MOCK_BAG } from '../../test/mocks/bag-products.mock';

describe('Confirmation component', () => {
  it('deve renderizar as informações do pagamento e a lista de produtos', () => {
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

  it('deve mostrar máscara padrão se cardNumber tiver menos de 4 dígitos', () => {
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

  it('deve lidar com cardNumber undefined sem quebrar', () => {
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

import { render, screen } from '@testing-library/react';
import CartResume from './CartResume';

jest.mock('../../contexts', () => ({
  useCheckoutContext: jest.fn(() => ({
    currentTab: 'current-tab-mock',
    setCurrentTab: jest.fn(),
  })),
}));

jest.mock('../../hooks', () => ({
  useOrder: jest.fn(() => ({
    cartData: {
      productsQuantity: '2',
      subTotal: '100,00',
      shipping: '10,00',
      discount: '5.00',
      total: '105,00',
    },
  })),
}));

jest.mock('./utils', () => ({
  getButtonState: jest.fn(() => ({
    type: 'submit',
    form: 'payment-form',
    buttonText: 'Finalizar pedido',
    nextStep: jest.fn(),
  })),
}));

describe('<CartResume />', () => {
  it('should render without any error', () => {
    render(<CartResume />);

    expect(screen.getByText('Produtos: (2 itens)')).toBeInTheDocument();
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
    expect(screen.getByText('Frete:')).toBeInTheDocument();
    expect(screen.getByText('R$ 10,00')).toBeInTheDocument();
    expect(screen.getByText('Desconto:')).toBeInTheDocument();
    expect(screen.getByText('R$ 5.00')).toBeInTheDocument();
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('R$ 105,00')).toBeInTheDocument();
  });
});

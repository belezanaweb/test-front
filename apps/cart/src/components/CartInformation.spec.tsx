import { render } from '@testing-library/react';

import CartInformation from './CartInformation';

describe('CartInformation', () => {
  const cartInfo = {
    subtotal: 100,
    productsCount: 3,
    shipping: 10,
    discount: 20,
    total: 90,
  };

  it('should render cart information correctly', () => {
    const { container, getByText } = render(
      <CartInformation {...cartInfo}>Content</CartInformation>,
    );

    const productsLabelElement = getByText('Produtos: (3 itens)');
    const subtotalLabelElement = getByText('Subtotal:');
    const subtotalAmountElement = getByText('R$ 100,00');
    const shippingLabelElement = getByText('Frete:');
    const shippingAmountElement = getByText('R$ 10,00');
    const discountLabelElement = getByText('Desconto:');
    const discountAmountElement = getByText('R$ 20,00');
    const totalLabelElement = getByText('Subtotal:');
    const totalAmountElement = getByText('R$ 90,00');
    const contentElement = getByText('Content');

    expect(productsLabelElement).toBeInTheDocument();
    expect(subtotalLabelElement).toBeInTheDocument();
    expect(subtotalAmountElement).toBeInTheDocument();
    expect(shippingLabelElement).toBeInTheDocument();
    expect(shippingAmountElement).toBeInTheDocument();
    expect(discountLabelElement).toBeInTheDocument();
    expect(discountAmountElement).toBeInTheDocument();
    expect(totalLabelElement).toBeInTheDocument();
    expect(totalAmountElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import { ActionContextProvider, ActionContext } from '../../../contexts/ActionContext';
import { Summary } from '../Summary';

test('renders summary component with correct values', () => {
  const summaryData = {
    quantity: 3,
    subTotal: 100,
    shippingTotal: 10,
    discount: 20,
    total: 90,
  };

  render(
    <ActionContext.Provider value={{ actionElement: null, setActionElement: () => { }, summary: summaryData, setSummary: () => { } }}>
      <Summary />
    </ActionContext.Provider>
  );

  const productsElement = screen.getByText('Produtos: (3 itens)');
  const subTotalElement = screen.getByText('R$ 100,00');
  const shippingElement = screen.getByText('R$ 10,00');
  const discountElement = screen.getByText('R$ 20,00');
  const totalElement = screen.getByText('R$ 90,00');

  expect(productsElement).toBeInTheDocument();
  expect(subTotalElement).toBeInTheDocument();
  expect(shippingElement).toBeInTheDocument();
  expect(discountElement).toBeInTheDocument();
  expect(totalElement).toBeInTheDocument();
});

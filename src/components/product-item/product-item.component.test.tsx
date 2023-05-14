import { render, screen } from '@testing-library/react';
import ProductItem, { testId } from './product-item.component';
import { mockCartItem1, mockCartItem2, mockCartItem3, mockCartItemWithoutDiscont } from './product-item.component.mock';

describe('ProductItem', () => {
  it('should render the product name', () => {
    render(<ProductItem item={mockCartItem1} />);

    const productName = screen.queryByTestId(`${testId}-name`);

    expect(productName).toBeInTheDocument();
    expect(productName).toHaveTextContent('Test Product 1');
  });

  it('should render the product price and discount price', () => {
    render(<ProductItem item={mockCartItem2} />);

    const productPrice = screen.queryByTestId(`${testId}-price`);
    const productDiscountPrice = screen.queryByTestId(`${testId}-discount-price`);

    expect(productPrice).toBeInTheDocument();
    expect(productPrice).toHaveTextContent('R$ 10,00');

    expect(productDiscountPrice).toBeInTheDocument();
    expect(productDiscountPrice).toHaveTextContent('R$ 2,00');
  });

  it('should render the product price only', () => {
    render(<ProductItem item={mockCartItemWithoutDiscont} />);

    const productPrice = screen.queryByTestId(`${testId}-price`);
    const productDiscountPrice = screen.queryByTestId(`${testId}-discount-price`);

    expect(productPrice).toBeInTheDocument();
    expect(productPrice).toHaveTextContent('R$ 15,00');

    expect(productDiscountPrice).not.toBeInTheDocument();
  });

  it('should render the product image', () => {
    render(<ProductItem item={mockCartItem3} />);

    const productImage = screen.queryByTestId(`${testId}-image`);

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', 'test-image-url');
  });
});

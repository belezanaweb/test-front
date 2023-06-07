import { render, screen } from '@testing-library/react';
import Product from './Product';

describe('<Product /> component', () => {
  it('should render product name and price', async () => {
    render(
      <Product
        imageUrl="https://fakeurl.com/image.jpg"
        productName="Test Product"
        price={15}
        maxPrice={20}
      />,
    );

    expect(screen.getByAltText('product image')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('R$15')).toBeInTheDocument();
    expect(screen.getByText('R$20')).toBeInTheDocument();
  });

  it('should not render product maxPrice', async () => {
    render(
      <Product
        imageUrl="https://fakeurl.com/image.jpg"
        productName="Test Product"
        price={30}
        maxPrice={30}
      />,
    );

    expect(screen.queryByTestId('max-price')).not.toBeInTheDocument();
  });
});

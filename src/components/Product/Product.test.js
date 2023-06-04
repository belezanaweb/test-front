import { render } from '@testing-library/react';
import Product from './Product';

describe('<Product /> component', () => {
  it('should render product name and price', async () => {
    const { getByText, getByAltText } = render(
      <Product
        imageUrl="https://fakeurl.com/image.jpg"
        productName="Test Product"
        price={15}
        maxPrice={20}
      />,
    );

    expect(getByAltText('product image')).toBeInTheDocument();
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('R$15')).toBeInTheDocument();
    expect(getByText('R$20')).toBeInTheDocument();
  });

  it('should not render product maxPrice', async () => {
    const { queryByTestId } = render(
      <Product
        imageUrl="https://fakeurl.com/image.jpg"
        productName="Test Product"
        price={30}
        maxPrice={30}
      />,
    );

    expect(queryByTestId('max-price')).not.toBeInTheDocument();
  });
});

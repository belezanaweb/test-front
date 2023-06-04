import { render } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import Product from './Product';

const mockData = {
  items: [
    {
      product: {
        name: 'Test Product',
        priceSpecification: {
          maxPrice: 20,
          price: 15,
        },
        imageObjects: [
          {
            small: 'https://fakeurl.com/image.jpg',
          },
        ],
      },
    },
  ],
};

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('../../services/cart', () => ({
  fetchCartProducts: jest.fn(),
}));

describe('Product component', () => {
  it('should render product name and price', async () => {
    useQuery.mockImplementationOnce(() => ({
      data: mockData,
    }));
    const { getByText, getByAltText } = render(<Product />);

    expect(getByAltText('product image')).toBeInTheDocument();
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('R$15')).toBeInTheDocument();
  });
});

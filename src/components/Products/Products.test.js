import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import Products from './Products';
import { normalizeCartData } from './utils';

jest.mock('./utils', () => ({
  normalizeCartData: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('../../services/cart', () => ({
  fetchCartProducts: jest.fn(),
}));

const mockData = {
  items: [
    {
      product: {
        name: 'Product 1',
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
    {
      product: {
        name: 'Product 2',
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

const mockNormalizedData = [
  {
    imageUrl: 'https://fakeurl.com/image.jpg',
    productName: 'Product 1',
    price: 15,
    maxPrice: 20,
  },
  {
    imageUrl: 'https://fakeurl.com/image.jpg',
    productName: 'Product 2',
    price: 15,
    maxPrice: 20,
  },
];

describe('<Products /> component', () => {
  it('should render the products without any error', async () => {
    useQuery.mockImplementationOnce(() => ({
      data: mockData,
    }));
    normalizeCartData.mockImplementationOnce(() => [...mockNormalizedData]);

    render(<Products />);

    const product1 = await screen.findByText('Product 1');
    const product2 = await screen.findByText('Product 2');

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});

import { renderHook } from '@testing-library/react';
import { normalizeCartData, normalizeProductData, useOrder } from '../useOrder';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: mockResponse,
  })),
}));

jest.mock('../../services/cart', () => ({
  fetchCartProducts: jest.fn(),
}));

const mockResponse = {
  items: [
    {
      product: {
        imageObjects: [{ small: 'https://fakeurl.com/image1.jpg' }],
        name: 'Product 1',
        priceSpecification: { price: 10, maxPrice: 20 },
      },
    },
    {
      product: {
        imageObjects: [{ small: 'https://fakeurl.com/image2.jpg' }],
        name: 'Product 2',
        priceSpecification: { price: 15, maxPrice: 25 },
      },
    },
  ],
  subTotal: 10.5,
  shippingTotal: 2.5,
  discount: 1.5,
  total: 11.5,
};

const cartDataNormalized = {
  productsQuantity: 2,
  subTotal: '10,50',
  shipping: '2,50',
  discount: '1.50',
  total: '11,50',
};

const productListDataNormalized = [
  {
    imageUrl: 'https://fakeurl.com/image1.jpg',
    productName: 'Product 1',
    price: '10,00',
    maxPrice: '20,00',
  },
  {
    imageUrl: 'https://fakeurl.com/image2.jpg',
    productName: 'Product 2',
    price: '15,00',
    maxPrice: '25,00',
  },
];

describe('normalizeCartData function', () => {
  it('should normalize cart data correctly', () => {
    const cartDataNormalized = normalizeCartData(mockResponse);
    expect(cartDataNormalized).toEqual(cartDataNormalized);
  });
});

describe('normalizeProductData function', () => {
  it('should normalize product data correctly', () => {
    const productListData = normalizeProductData(mockResponse);
    expect(productListData).toEqual(productListDataNormalized);
  });
});

describe('useOrder hook', () => {
  it('should return the correct order data', () => {
    const { result } = renderHook(() => useOrder());

    expect(result.current.productListData).toEqual(productListDataNormalized);
    expect(result.current.cartData).toEqual(cartDataNormalized);
  });
});

import { normalizeProductData } from './index';

describe('normalizeProductData function', () => {
  it('should return an empty array when passed an empty array', () => {
    const data = { items: [] };
    const result = normalizeProductData(data);
    expect(result).toEqual([]);
  });

  it('should return an array of formatted products when passed an array of items', () => {
    const data = {
      items: [
        {
          product: {
            imageObjects: [{ small: 'image1.jpg' }],
            name: 'Product 1',
            priceSpecification: { price: 10, maxPrice: 20 },
          },
        },
        {
          product: {
            imageObjects: [{ small: 'image2.jpg' }],
            name: 'Product 2',
            priceSpecification: { price: 15, maxPrice: 25 },
          },
        },
      ],
    };
    const result = normalizeProductData(data);
    expect(result).toEqual([
      {
        imageUrl: 'image1.jpg',
        productName: 'Product 1',
        price: '10,00',
        maxPrice: '20,00',
      },
      {
        imageUrl: 'image2.jpg',
        productName: 'Product 2',
        price: '15,00',
        maxPrice: '25,00',
      },
    ]);
  });
});

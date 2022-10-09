import { getCart } from './api';

describe('Test API calls', () => {
  const imageExpect = expect.objectContaining({
    featured: expect.any(Boolean),
    thumbnail: expect.any(String),
    small: expect.any(String),
    medium: expect.any(String),
    large: expect.any(String),
    extraLarge: expect.any(String),
    valid: expect.any(Boolean)
  });
  const itemsExpect = expect.objectContaining({
    quantity: expect.any(Number),
    product: expect.objectContaining({
      sku: expect.any(String),
      name: expect.any(String),
      imageObjects: expect.arrayContaining([imageExpect]),
      priceSpecification: expect.objectContaining({
        sku: expect.any(String),
        price: expect.any(Number),
        originalPrice: expect.any(Number),
        maxPrice: expect.any(Number),
        percent: expect.any(Number),
        discount: expect.any(Number)
      })
    })
  });

  test('Get unexpected object', () => {
    const mockedGetCart = jest.fn(getCart).mockReturnValue({ unexpected: 'value' });

    const data = mockedGetCart();

    expect(data.id).not.toEqual(expect.any(String));
    expect(data.discount).not.toEqual(expect.any(Number));
    expect(data.total).not.toEqual(expect.any(Number));
    expect(data.subTotal).not.toEqual(expect.any(Number));
    expect(data.shippingTotal).not.toEqual(expect.any(Number));
    expect(data.items).not.toEqual(expect.arrayContaining([itemsExpect]));
  });

  test('Get expected object', async () => {
    const data = await getCart();

    expect(data.id).toEqual(expect.any(String));
    expect(data.discount).toEqual(expect.any(Number));
    expect(data.total).toEqual(expect.any(Number));
    expect(data.subTotal).toEqual(expect.any(Number));
    expect(data.shippingTotal).toEqual(expect.any(Number));
    expect(data.items).toEqual(expect.arrayContaining([itemsExpect]));
  });
});

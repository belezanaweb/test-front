export const mockData = {
  id: '01234',
  items: [
    {
      sku: '24410',
      name: 'Produto teste 1',
      quantity: 1,

      imageObjects: [
        {
          featured: true,
          thumbnail:
            'https://fastly.picsum.photos/id/173/200/300.jpg?hmac=9Ed5HxHOL3tFCOiW6UHx6a3hVksxDWc7L7p_WzN9N9Q',
          small:
            'https://fastly.picsum.photos/id/173/200/300.jpg?hmac=9Ed5HxHOL3tFCOiW6UHx6a3hVksxDWc7L7p_WzN9N9Q',
          medium:
            'https://fastly.picsum.photos/id/173/200/300.jpg?hmac=9Ed5HxHOL3tFCOiW6UHx6a3hVksxDWc7L7p_WzN9N9Q',
          valid: true
        }
      ],
      priceSpecification: {
        price: 10,
        maxPrice: 20,
        discount: 5
      }
    }
  ],

  shippingTotal: 2.5,
  total: 400.5,
  subTotal: 320,
  discount: 8
}

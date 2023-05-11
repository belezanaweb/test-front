export const responseBag = {
  id: '1',
  items: [{
    quantity: 1,
    product: {
      sku: '2',
      name: 'name',
      imageObjects: [{
        featured: true,
        thumbnail: 'thumbnail.jpg',
        small: 'small.jpg',
        medium: 'medium.jpg',
        large: 'large.jpg',
        extraLarge: 'extraLarge.jpg',
        valid: true,
      }],
      priceSpecification: {
        sku: '2',
        price: 100,
        originalPrice: 100,
        maxPrice: 200,
        percent: 50,
        discount: 100,
      },
    },
  }],
  shippingTotal: 2.2,
  total: 202.2,
  subTotal: 102.2,
  discount: 100,
};

export const payment = {
  paymentName: 'name',
  paymentNumber: '***',
  paymentValid: 'valid',
  paymentCvv: 'cvv',
};

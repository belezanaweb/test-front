import { ICartItemViewModel } from "../../types/cart.types";

export const mockCartItem1: ICartItemViewModel = {
  quantity: 0,
  product: {
    sku: '13432432',
    name: 'Test Product 1',
    imageObjects: [{
      thumbnail: 'test-image-url',
      small: 'test-image-url',
      valid: false,
    },
    ],
    priceSpecification: {
      sku: '1233',
      originalPrice: 30,
      price: 10,
      discount: 8,
      maxPrice: 30,
      percent: 2,
    },
  },
};

export const mockCartItem2: ICartItemViewModel = {
  quantity: 0,
  product: {
    sku: '564564',
    name: 'Test Product 2',
    imageObjects: [{
      thumbnail: 'test-image-url',
      small: 'test-image-url',
      valid: false,
    },
    ],
    priceSpecification: {
      sku: '1233',
      originalPrice: 30,
      price: 10,
      discount: 2,
      maxPrice: 30,
      percent: 2,
    },
  },
};

export const mockCartItem3: ICartItemViewModel = {
  quantity: 0,
  product: {
    sku: '87657345',
    name: 'Test Product 3',
    imageObjects: [{
      thumbnail: 'test-image-url',
      small: 'test-image-url',
      valid: false,
    },
    ],
    priceSpecification: {
      sku: '1233',
      originalPrice: 30,
      price: 15,
      discount: 2,
      maxPrice: 30,
      percent: 2,
    },
  },
};

export const mockCartItemWithoutDiscont: ICartItemViewModel = {
  ...mockCartItem3,
  product: {
    ...mockCartItem3.product,
    priceSpecification: {
      ...mockCartItem3.product.priceSpecification,
      discount: 0,
    }
  }
};
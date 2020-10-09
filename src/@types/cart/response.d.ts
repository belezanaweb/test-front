export interface CartResponse {
  items: CartItemResponse[];
  subTotal: number;
  shippingTotal?: number;
  discount?: number;
  total: number;
}

export interface CartItemResponse {
  quantity: number;
  product: CartProductResponse;
}

export interface CartProductResponse {
  sku: string;
  name: string;
  imageObjects: [
    {
      medium: string;
    },
  ];
  priceSpecification: {
    price: number;
  };
}

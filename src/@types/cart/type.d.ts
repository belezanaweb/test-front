export interface Cart {
  items: CartItem[];
  prices: CartPrices;
}

export interface CartItem {
  quantity: number;
  product: CartProduct;
}

export interface CartProduct {
  sku: string;
  name: string;
  imageUrl: string;
  priceSpecification: {
    price: number;
    priceFormatted: string;
  };
}

export interface CartPrices {
  subTotal: number;
  subTotalFormatted: string;
  shippingTotal?: number;
  shippingTotalFormatted: string;
  discount?: number;
  discountFormatted: string;
  total: number;
  totalFormatted: string;
}

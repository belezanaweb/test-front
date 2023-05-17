export type Product = {
  name: string;
  sku: string;
  priceSpecification: {
    sku: string;
    price: number;
    maxPrice: number;
    originalPrice: number;
    percent: number;
    discount: number;
  };
  imageObjects: {
    featured: boolean;
    valid: boolean;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
};

export type Checkout = {
  id: string;

  items: {
    quantity: Number;
    product: Product;
  }[];

  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
};

export type CheckoutContextProps = {
  checkout?: Checkout;
  fetchCheckout: () => void;
};

export type CheckoutProviderProps = {};
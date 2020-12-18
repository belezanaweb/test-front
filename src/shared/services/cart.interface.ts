export interface PriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

export interface Images {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean
}

export interface Product {
  quantity: number;
  product: {
    sku: string;
    name: string;
    imageObjects: Images[];
    priceSpecification: PriceSpecification[];
  }
}

export interface Cart {
  id: string;
  items: Product[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

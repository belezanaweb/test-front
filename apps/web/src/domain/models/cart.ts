export interface CartResponse {
  id: string;
  items: Item[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

export interface Item {
  quantity: number;
  product: Product;
}

export interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}

export interface ImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
}

export interface PriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

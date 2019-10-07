interface ImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
}

interface PriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}

export interface IProduct {
  quantity: number;
  product: Product;
}

export interface IProductList {
  id: string;
  items: IProduct[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

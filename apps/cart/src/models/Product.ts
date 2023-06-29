export type ImageObject = {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
};

export type PriceSpecification = {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
};

export type ProductClass = {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
};

export type Product = {
  quantity: number;
  product: ProductClass;
};

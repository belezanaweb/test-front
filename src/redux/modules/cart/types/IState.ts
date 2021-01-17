export interface ICart {
  id: string;
  items: IItem[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

interface IItem {
  quantity: number;
  product: IProduct;
}

interface IProduct {
  sku: string;
  name: string;
  imageObjects: IImageObject[];
  priceSpecification: IPriceSpecification;
}

interface IPriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

interface IImageObject {
  featured: boolean;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  valid: boolean;
}

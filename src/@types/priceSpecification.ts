export interface IPriceSpecification {
  sku: string;
  price: string;
  originalPrice: string;
  maxPrice: string;
  percent: string;
  discount: string;
}

export interface IRawPriceSpecification {
  sku: string;
  price: number;
  originalPrice: number;
  maxPrice: number;
  percent: number;
  discount: number;
}

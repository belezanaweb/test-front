import { Product } from './Product';

export type Cart = {
  id: string;
  items: Product[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
};

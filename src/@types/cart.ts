import { IProduct } from "./product";

export interface ICart {
  id?: string;
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
  items: IItem[] | null;
}

export interface IItem {
  quantity: number;
  product: IProduct;
}

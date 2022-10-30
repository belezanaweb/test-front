import { IProduct } from "./product";

export interface ICart {
  id?: string;
  subTotal: string;
  shippingTotal: string;
  discount: string;
  total: string;
  items: IItem[] | null;
}

export interface IItem {
  quantity: number;
  product: IProduct;
}

export interface IRowCart {
  id?: string;
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
  items: IItem[] | null;
}

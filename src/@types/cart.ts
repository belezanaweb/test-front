import { IProduct, IRawProduct } from "./product";

export interface ICart {
  id?: string;
  subTotal: string;
  shippingTotal: string;
  discount: string;
  total: string;
  items: IItem[] | null;
  paymentData?: IPayment;
}

export interface IPayment {
  creditCardNumber: string;
  ownerName: string;
  validateDate: string;
}

export interface IItem {
  quantity: number;
  product: IProduct;
}

export interface IRowItem {
  quantity: number;
  product: IRawProduct;
}

export interface IRowCart {
  id?: string;
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
  items: IRowItem[] | null;
  paymentData?: IPayment;
}

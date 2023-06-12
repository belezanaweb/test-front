import { Item } from "./Item";

export interface Cart {
  id: string;
  items: Item[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

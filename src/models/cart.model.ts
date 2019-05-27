import { Item } from "./item.model";

export type CartType = {
  id            : string
  items         : Item[]
  subTotal      : Number
  shippingTotal : Number
  discount      : Number
  total         : Number
  methodPayment?: any // @Todo: to need create model of method payment
}

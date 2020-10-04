interface Item {
  quantity: number;
}

export interface Cart {
  items: Item[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

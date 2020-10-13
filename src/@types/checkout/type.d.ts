import { Cart } from '../cart';

export interface Payment {
  numeroCartao: string;
  nomeTitular: string;
  validate: string;
  cvv: string;
}

export interface Order {
  cart: Cart;
  payment: Payment;
}

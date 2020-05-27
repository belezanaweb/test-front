import Product from './Product';

interface CartItem {
  quantity: number;
  product: Product;
}

interface Cart {
  id: string;
  items: CartItem[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

export default Cart;
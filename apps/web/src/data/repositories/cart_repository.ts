import { CartModel } from '@/domain/models/cart';

export interface CartRepository {
  fetchCartData(): Promise<CartModel>;
}

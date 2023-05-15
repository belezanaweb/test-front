import { CartResponse } from '@/domain/models/cart'

export interface CartRepository {
  fetchCartData(): Promise<CartResponse>;
}

import { AsyncUseCase } from '@/core'
import { CartRepository } from '@/data/repositories/cart_repository'
import { CartModel } from '../models/cart'

export class GetCartDataUseCase implements AsyncUseCase<CartModel> {
  constructor(private readonly repository: CartRepository) {}

  async invoke(): Promise<CartModel> {
    return await this.repository.fetchCartData()
  }
}

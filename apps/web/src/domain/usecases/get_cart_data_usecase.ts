import { AsyncUseCase } from '@/core'
import { CartRepository } from '@/data/repositories/cart_repository'
import { CartResponse } from '../models/cart'

export class GetCartDataUseCase implements AsyncUseCase<CartResponse> {
  constructor(private readonly repository: CartRepository) {}

  async invoke(): Promise<CartResponse> {
    return await this.repository.fetchCartData()
  }
}

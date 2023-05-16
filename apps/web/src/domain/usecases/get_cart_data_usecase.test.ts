import { CartRepository } from '@/data/repositories/cart_repository'
import { MockCartRepository } from '@/test/mocks'
import { CartResponse } from '../models'
import { GetCartDataUseCase } from './get_cart_data_usecase'

describe('GetCartDataUseCase', () => {
  let repository: CartRepository
  let useCase: GetCartDataUseCase

  beforeAll(() => {
    repository = new MockCartRepository()
    useCase = new GetCartDataUseCase(repository)
  })

  it('should invoke usecase method and returns normally', async () => {
    useCase.invoke()
    expect(repository.fetchCartData).toHaveBeenCalledTimes(1)
  })

  it('should invoke usecase method and returns value with success', async () => {
    const data = await useCase.invoke()
    expect(data).toEqual({} as CartResponse)
  })
})

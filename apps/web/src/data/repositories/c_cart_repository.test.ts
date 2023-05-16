import { describe, it } from 'vitest'

import { HttpClient } from '@/infra/http/http_client'
import { MockHttpClient } from '@/test/mocks'
import { CCartRepository } from './c_cart_repository'
import { CartRepository } from './cart_repository'

describe('CCartRepository', () => {
  let httpClient: HttpClient
  let repository: CartRepository

  beforeAll(() => {
    httpClient = new MockHttpClient()
    repository = new CCartRepository('fake.url', httpClient)
  })

  it('should call fetchCartData with success', async () => {
    await repository.fetchCartData()
    expect(httpClient.get).toHaveBeenCalledTimes(1)
  })
})

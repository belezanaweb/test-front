import { describe, it, vi } from 'vitest'

import { CartResponse } from '@/domain/models/cart'
import { HttpClient } from '@/infra/http/http_client'
import { CCartRepository } from './c_cart_repository'
import { CartRepository } from './cart_repository'

describe('CCartRepository', () => {
  let httpClient: HttpClient
  let repository: CartRepository

  beforeAll(() => {
    httpClient = new MockHttpClient()
    repository = new CCartRepository('', httpClient)
  })

  it('should call fetchCartData and returns with success', async () => {
    const data = await repository.fetchCartData()

    expect(data).toBe({
      id: '123',
      items: [
        {
          product: {
            name: 'Test',
            imageObjects: null,
            priceSpecification: null
          }
        }
      ],
      total: 200
    } as CartResponse)
  })
})

class MockHttpClient implements HttpClient {
  async get(url: string): Promise<any> {
    return await vi.fn().mockReturnValue({
      id: '123',
      items: [
        {
          product: {
            name: 'Test',
            imageObjects: null,
            priceSpecification: null
          }
        }
      ],
      total: 200
    })
  }
}

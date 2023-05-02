import { apiMockData } from '@/mocks/handlers'

import { fetchCartItems } from './use-cart-items'

test('fetch cart items from backend', async () => {
  const data = await fetchCartItems()

  expect(data).toEqual(apiMockData)
})

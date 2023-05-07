import { BASE_URL } from '@/hooks'
import { rest } from 'msw'

const data = {
  items: [
    {
      quantity: 1,
      product: {
        name: 'Loreal',
        imageObjects: [
          {
            small: 'fake-url.jpg'
          }
        ],
        priceSpecification: {
          price: 225.9,
          maxPrice: 243.9
        }
      }
    },
    {
      quantity: 1,
      product: {
        name: 'Carolina',
        imageObjects: [
          {
            small: 'fake-url-2.jpg'
          }
        ],
        priceSpecification: {
          price: 299,
          maxPrice: 299
        }
      }
    }
  ],
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 600.1
}

export const handlers = [
  rest.get(BASE_URL, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  })
]

import { setupServer } from 'msw/node'

import { rest } from 'msw'
import { fakeCartResponse } from '../mocks'

export const cartData = fakeCartResponse

export const handlers = [
  rest.get('http://fake.api', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData))
  }),
]

export const server = setupServer(...handlers)
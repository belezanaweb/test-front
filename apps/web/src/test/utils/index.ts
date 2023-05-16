import { setupServer } from 'msw/node'

import { rest } from 'msw'
import { fakeCartModel } from '../mocks'

export const cartData = fakeCartModel

export const handlers = [
  rest.get('http://fake.api', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(cartData))
  }),
]

export const server = setupServer(...handlers)
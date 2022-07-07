import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { bagResponseMock } from '../bagResponse'
import { belezaNaWebApi } from '../../src/api/index'

export const setupMockServer = () => {
  const baseURL = belezaNaWebApi.getUri()

  const server = setupServer(
    rest.get(`${baseURL}5b15c4923100004a006f3c07`, (req, res, ctx) =>
      res(ctx.status(200), ctx.json(bagResponseMock))
    )
  )

  beforeAll(() => server.listen())
  afterAll(() => server.close())
}

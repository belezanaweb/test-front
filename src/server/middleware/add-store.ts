import * as express from 'express'
import { configureStore } from '../../shared/store'

const addStore = (
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const addCityId = (slug: string) => {
    switch (slug) {
      case 'rio-de-janeiro':
        return '2'
      default:
        return '1' // sao-paulo
    }
  }

  res.locals.store = configureStore({
    initialState: {
      cities: {
        currentID: addCityId(_req.query.city),
        states: [
          { id: '2', name: 'Rio de Janeiro', slug: 'rio-de-janeiro' },
          { id: '1', name: 'São Paulo', slug: 'sao-paulo' }
        ],
        cities: [
          { id: '2', name: 'Rio de Janeiro', slug: 'rio-de-janeiro', state: '2' },
          { id: '1', name: 'São Paulo', slug: 'sao-paulo', state: '1' }
        ]
      }
    }
  })
  next()
}

export default addStore

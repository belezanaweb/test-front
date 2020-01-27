import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'

import { api } from '~/services/api'
import { getCartSuccess } from '~/store/ducks/cart/actions'
import { getCart } from '~/store/ducks/cart/sagas'

const apiMock = new MockAdapter(api)

describe('Cart saga', () => {
  it('should to fetch products list', async () => {
    const dispatch = jest.fn()

    apiMock.onGet('/5b15c4923100004a006f3c07').reply(200, {
      id: 'Test id',
      items: []
    })

    await runSaga({ dispatch }, getCart).toPromise()
    expect(dispatch).toHaveBeenCalledWith(getCartSuccess({ id: 'Test id', items: [] }))
  })
})

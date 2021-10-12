import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { runSaga } from 'redux-saga'
import { CartTypes, CartActions } from './ducks/cart.ducks'
import getCartRequest from './sagas/cart.sagas'

const apiURL = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

const apiMock = new MockAdapter(axios)

describe('Cart redux actions', () => {
  it('should execute cartRequest', () => {
    const expectedAction = {
      type: CartTypes.CART_REQUEST
    }

    expect(CartActions.cartRequest()).toEqual(expectedAction)
  })

  it('should execute cartSuccess', () => {
    const expectedAction = {
      type: CartTypes.CART_SUCCESS
    }

    expect(CartActions.cartSuccess()).toEqual(expectedAction)
  })

  it('should execute cartFailure', () => {
    const expectedAction = {
      type: CartTypes.CART_FAILURE
    }

    expect(CartActions.cartFailure()).toEqual(expectedAction)
  })
  it('should be able to get cart list schema', async () => {
    const dispatched = []
    const payload = [{ name: 'Geao' }]

    apiMock.onGet(apiURL).reply(200, payload)

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      () => getCartRequest()
    ).toPromise()
    const expectedActionSucceded = CartActions.cartSuccess(payload)
    expect(dispatched[0]).toStrictEqual(expectedActionSucceded)
  })
  it('should be able to failure to get cart list schema', async () => {
    const dispatched = []

    const error = {
      statusCode: 0,
      errors: ['string'],
      message: 'string'
    }
    apiMock.onGet(apiURL).reply(400, error)

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      () => getCartRequest()
    ).toPromise()
    const expectedActionFailured = CartActions.cartFailure(error)
    expect(dispatched[0].type.toString()).toBe(expectedActionFailured.type.toString())
  })
})

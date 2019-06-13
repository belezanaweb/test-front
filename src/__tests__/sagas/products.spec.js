import {runSaga} from 'redux-saga';
import api from '../../services/api'
import MockAdapter from 'axios-mock-adapter'

import {Creators as ProductsActions} from '../../store/ducks/products'
import { getProducts } from '../../store/sagas/products';
import mockApiData from '../../mocks/mockApi'

const apiMock = new MockAdapter(api)

describe('Products Saga', () => {
  it('should be able to fetch products', async () => {
    const dispatched = [];

    apiMock.onGet('').reply(200, mockApiData)

    await runSaga({
      dispatch: action => {
        dispatched.push(action)
      }
    }, getProducts).toPromise();

    expect(dispatched).toContainEqual(ProductsActions.getProductsSuccess(mockApiData))
  })
})

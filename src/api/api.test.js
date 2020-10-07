import axiosMock from 'axios'

import * as apiUtils from './api-utils'
import { apiData } from './api'

jest.mock('axios')

afterEach(axiosMock.get.mockClear)

describe('api', () => {
  describe('apiData', () => {
    test('success api call to apiData', async () => {
      const successResponse = {
        data: '',
        status: 200,
        statusText: 'OK'
      }
      axiosMock.get.mockResolvedValueOnce(Promise.resolve(successResponse))

      const response = await apiData()
      apiUtils.handleError = jest.fn()

      expect(response).toEqual(successResponse)
      expect(axiosMock.get).toHaveBeenCalledTimes(1)
      expect(axiosMock.get).toHaveBeenCalledWith('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      expect(apiUtils.handleError).toHaveBeenCalledTimes(0)
    })

    test('error api call to apiData', async () => {
      const errorResponse = {
        data: '',
        status: 400,
        statusText: 'Bad Request'
      }
      axiosMock.get.mockRejectedValueOnce(errorResponse)
      apiUtils.handleError = jest.fn()

      await apiData()

      expect(axiosMock.get).toHaveBeenCalledTimes(1)
      expect(axiosMock.get).toHaveBeenCalledWith('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      expect(apiUtils.handleError).toHaveBeenCalledTimes(1)
      expect(apiUtils.handleError).toHaveBeenCalledWith(errorResponse)
    })
  })
})

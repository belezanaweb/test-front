import Axios from 'axios'
import SaleService from './SaleService'

describe('SaleService', () => {
  jest.mock('axios')
  test('request data and receive error as an answer', async () => {
    jest.spyOn(Axios, 'get').mockImplementation((url) => {
      return new Promise((resolve, reject) => {
        reject(new Error('This is bad'))
      })
    })
    await expect(SaleService.loadData()).rejects.toThrowError('This is bad')
  })

  test('request data and receive normally', async () => {
    let saleUrl = ''
    jest.spyOn(Axios, 'get').mockImplementation((url) => {
      return new Promise((resolve, reject) => {
        saleUrl = url
        resolve({ message: 'success' })
      })
    })
    const result = await SaleService.loadData()
    expect(saleUrl).toBe('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    expect(result.message).toBe('success')
  })
})

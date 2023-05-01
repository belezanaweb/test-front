import useCart from './useCart'
import { waitFor } from '@testing-library/react'
import getCart from '../services/getCart'
import { renderHookWithQueryWrapper } from '../test/utils'
import { Mock, vi } from 'vitest'
import { mockCart } from '../test/setup-test'

vi.mock('../services/getCart', () => ({
  default: vi.fn().mockImplementation(() => Promise.resolve(mockCart))
}))

describe('Testing the useCart hook', () => {
  it('should call the getCart service', () => {
    const hook = () => useCart()
    renderHookWithQueryWrapper(hook)
    expect(getCart).toBeCalled()
  })
  it('should query the getCart service and return the mocked response', async () => {
    const hook = () => useCart()
    const { result } = renderHookWithQueryWrapper(hook)
    await waitFor(() => {
      expect(result.current.data).toBe(mockCart)
    })
  })

  it('should query the getCart service and return the mocked response', async () => {
    (getCart as Mock).mockImplementation(() => Promise.reject(new Error('bazzinga')))
    const hook = () => useCart()
    const { result } = renderHookWithQueryWrapper(hook)
    await waitFor(() => {
      expect(result.current.isError).toBeTruthy()
    })
  })
})

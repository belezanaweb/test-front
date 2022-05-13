import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import {
  useCartDetails,
  CartDetailsProvider,
  CartDetailsProviderProps
} from '../../hooks/useCartDetails'
import { setStorageItem } from '../../util/localStorage'
import { CartDetails } from '../../components/Product/cartDetailsMock'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartDetailsProviderProps) => (
      <CartDetailsProvider>{children}</CartDetailsProvider>
    )

    setStorageItem('CartDetails', ['1'])

    const { result, waitForNextUpdate } = renderHook(() => useCartDetails(), {
      wrapper
    })

    expect(result.current.mounted).toBe(false)

    await waitForNextUpdate()

    expect(result.current.mounted).toBe(true)

    expect(result.current.items).toStrictEqual(CartDetails)
    expect(result.current.shippingTotal).toBe(5.3)
    expect(result.current.subTotal).toBe(624.8)
  })
})

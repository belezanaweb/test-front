import React from 'react'
import { useCheckout } from '../../hooks/checkout'
import api from '../../services/api'
import { renderHook } from '@testing-library/react-hooks'
import AppProvider from '../../hooks'

jest.mock('../../services/api')

describe('useCheckout', () => {
  test('should render without errors', async () => {
    const mockData = {
      data: {
        discount: 30,
        shippingTotal: 5.3,
        subTotal: 624.8,
        total: 618.9,
        items: [
          {
            product: {
              name: 'product'
            }
          }
        ]
      }
    }

    api.get.mockImplementation(() => Promise.resolve(mockData))

    const wrapper = ({ children }) => <AppProvider>{children}</AppProvider>
    const { result, waitForNextUpdate } = renderHook(() => useCheckout(), { wrapper })

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.isLoading).toBe(false)
  })
})

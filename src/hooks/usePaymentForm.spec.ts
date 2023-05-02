import usePaymentForm from './usePaymentForm'
import { renderHookWithQueryWrapper } from '../test/utils'
import { Mock, vi } from 'vitest'
import { mockFormState } from '../test/setup-test'
import { useNavigate } from 'react-router-dom'
import { useReducer } from 'react'
import { useMutation } from '@tanstack/react-query'
import { waitFor } from '@testing-library/react'

const dispatch = vi.fn();
const navigate = vi.fn();
const mutateAsync = vi.fn().mockResolvedValue(true)

vi.mock('../services/sendPaymentData', () => ({
  default: vi.fn().mockImplementation(() =>
    Promise.resolve({
      cardNumber: '****.****.****.0000',
      cardOwner: 'Jefferson caminhões',
      cardExpirationDate: '12/12'
    })
  )
}))

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn().mockImplementation(() => navigate)
}))

vi.mock('react', () => ({
  useReducer: vi.fn().mockImplementation(() => ([
    mockFormState,
    dispatch
  ]))
}))

vi.mock('@tanstack/react-query', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...(mod as {}),
    useMutation: vi.fn().mockImplementation(() => ({
      mutateAsync,
      isError: false,
      failureReason: "",
      isLoading: false,
    }))
  }
})

describe('Testing the usePaymentForm hook', () => {
  it('should call the useNavigate hook', () => {
    const hook = () => usePaymentForm()
    renderHookWithQueryWrapper(hook)
    expect(useNavigate).toBeCalled()
  })
  it('should call the useReducer hook', () => {
    const hook = () => usePaymentForm()
    renderHookWithQueryWrapper(hook)
    expect(useReducer).toBeCalled()
  })
  it('should call the useMutation hook', () => {
    const hook = () => usePaymentForm()
    renderHookWithQueryWrapper(hook)
    expect(useMutation).toBeCalled()
  })

  describe("Testing the sendForm function", () => {

    it('should return an array with the errored fields if no field is filled', async () => {
      const hook = () => usePaymentForm()
      const { result } = renderHookWithQueryWrapper(hook)
      const errors = await result.current.sendForm();
      expect(errors).toEqual([ 'cardNumber', 'cardOwner', 'cardExpirationDate', 'cardSecurityCode' ])
    })

    it('should call mutateAsync', async () => {
      (useReducer as Mock).mockImplementation(() => ([
        {
          ...mockFormState,
          options: {
            card: {
              cardNumber: "a",
              cardOwner: "a",
              cardExpirationDate: "a",
              cardSecurityCode: "a",
            }
          }
        },
        dispatch
      ]))
      const hook = () => usePaymentForm()
      const { result } = renderHookWithQueryWrapper(hook)
      await result.current.sendForm();
      expect(mutateAsync).toBeCalled()
    })

    it('should call navigate', async () => {
      const hook = () => usePaymentForm()
      const { result } = renderHookWithQueryWrapper(hook)
      result.current.sendForm();
      await waitFor(() => {
        expect(navigate).toBeCalled()
      })
    })

  })
})

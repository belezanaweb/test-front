import { describe, expect, it } from 'vitest'
import formReducer, { formInitialState } from '.'
import { handleChangeSelectedOption, handleFormError, updateCardForm } from './actions'

describe('Testing the form reducer', () => {
  it('should return the initialState', () => {
    const state = formReducer(formInitialState, { type: '', payload: { name: '', value: '' } })
    expect(state).toEqual(formInitialState)
  })

  it('should update the card state as the given action', () => {
    const value = '0000 0000 0000 0000'
    const name = 'cardNumber'
    const state = formReducer(formInitialState, updateCardForm(name, value))
    expect(state.options.card[name]).toEqual(value)
  })

  it('should update the selectedPayment as the given action', () => {
    const value = 'boleto'
    const state = formReducer(formInitialState, handleChangeSelectedOption(value))
    expect(state.selectedPayment).toEqual(value)
  })

  it('should update the errorArray state as the given action', () => {
    const value = ['cardNumber']
    const state = formReducer(formInitialState, handleFormError(value))
    expect(state.errorArray).toEqual(value)
  })

  it('should clear the errorArray state  when change action is given', () => {
    const cardNumber = '0000 0000 0000 0000'
    const name = 'cardNumber'
    const value = ['cardNumber']
    const state = formReducer(formInitialState, handleFormError(value))
    const newState = formReducer(state, updateCardForm(name, cardNumber))
    expect(newState.errorArray.length).toBe(0)
  })
})

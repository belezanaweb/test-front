import { describe, expect, it } from 'vitest'
import { ActionKind, handleChangeSelectedOption, handleFormError, updateCardForm } from './actions'

describe('Testing the reducer actions', () => {
  describe('Testing the updateCardForm action', () => {
    it('should return the expected action object', () => {
      const value = '0000 0000 0000 0000'
      const name = 'cardNumber'
      const state = updateCardForm(name, value)
      expect(state).toEqual({ type: ActionKind.UPDATE_CARD_FORM, payload: { name, value } })
    })
  })
  describe('Testing the handleChangeSelectedOption action', () => {
    it('should return the expected action object', () => {
      const value = 'boleto'
      const state = handleChangeSelectedOption(value)
      expect(state).toEqual({
        type: ActionKind.CHANGE_SELECTED_OPTION,
        payload: { name: '', value }
      })
    })
  })

  describe('Testing the handleFormError action', () => {
    it('should return the expected action object', () => {
      const value = ['cardNumber']
      const state = handleFormError(value)
      expect(state).toEqual({
        type: ActionKind.FORM_ERROR,
        payload: { name: '', value: JSON.stringify(value) }
      })
    })
  })
})

import React from 'react'
import { PaymentValidate } from '../../util/validations'

describe('signUpValidate', () => {
  it('should validate empty fields', () => {
    const values = {
      creditCard: '',
      nameInCard: '',
      expirationDate: '',
      cvv: ''
    }

    expect(PaymentValidate(values)).toMatchObject({
      creditCard: expect.any(String),
      nameInCard: expect.any(String),
      expirationDate: expect.any(String),
      cvv: expect.any(String)
    })
  })

  it('should return creditCard error', () => {
    const values = {
      creditCard: '321',
      nameInCard: '',
      expirationDate: '',
      cvv: ''
    }
    expect(PaymentValidate(values).creditCard).toMatchInlineSnapshot(
      `"Esse não é um cartão de crédito válido"`
    )
  })

  it('should return invalid nameInCard error', () => {
    const values = {
      creditCard: '',
      nameInCard: '#',
      expirationDate: '',
      cvv: ''
    }
    expect(PaymentValidate(values).nameInCard).toMatchInlineSnapshot(
      `"Somente letras são permitidas para o nome"`
    )
  })

  it('should return invalid expirationDate error', () => {
    const values = {
      creditCard: '',
      nameInCard: '',
      expirationDate: '32/32',
      cvv: ''
    }
    expect(PaymentValidate(values).expirationDate).toMatchInlineSnapshot(
      `"Data de validade inválida"`
    )
  })

  it('should return invalid cvv error', () => {
    const values = {
      creditCard: '',
      nameInCard: '',
      expirationDate: '',
      cvv: '1'
    }
    expect(PaymentValidate(values).cvv).toMatchInlineSnapshot(
      `"O CVV precisa ter no mínimo 3 dígitos"`
    )
  })
})

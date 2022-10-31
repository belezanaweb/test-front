import React, { useState, useCallback } from 'react'

import { useCreditCard } from '../../hooks/creditCard'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

const CreditCardForm = ({ formId, formSubmitted }) => {
  const { formData } = useCreditCard()

  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (FormDataIsValid()) formSubmitted()
  }

  const FormDataIsValid = useCallback(() => {
    let errorObj = { valid: false }

    Object.keys(formData).forEach((data) => {
      let isValid

      switch (data) {
        case 'number':
          isValid = formData.number
            ?.replaceAll('.', '')
            .match(
              /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/g
            )
          break
        case 'name':
          isValid = formData.name?.match(/^[a-zA-Z]{2,30}$/g)
          break
        case 'expiry':
          isValid = formData.expiry?.match(/[0-9/]{7}/g)
          break
        case 'cvv':
          isValid = formData.cvv?.match(/\d{3}/g)
          break
        default:
          break
      }
      errorObj = { ...errorObj, [data]: !isValid, valid: isValid }
    })

    setError(errorObj)

    return errorObj.valid
  }, [formData])

  return (
    <Card>
      <Form id={formId} onSubmit={handleSubmit}>
        <Input
          name={'number'}
          onlyNumbers
          placeholder={'____.____.____.____'}
          maskPattern={'####.####.####.####'}
          maskDivider={'.'}
          label={'Número do cartão:'}
          hasError={error.number}
        />
        <Input
          name={'name'}
          placeholder={'Como no cartão'}
          label={'Nome do Titular:'}
          hasError={error.name}
        />
        <Warper>
          <Input
            name={'expiry'}
            onlyNumbers
            placeholder={'__/____'}
            maskPattern={'##/####'}
            maskDivider={'/'}
            label={'Validade (mês/ano):'}
            hasError={error.expiry}
          />
          <Input
            name={'cvv'}
            onlyNumbers
            placeholder={'___'}
            maskPattern={'###'}
            label={'CVV:'}
            hasError={error.cvv}
          />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

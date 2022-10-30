import React, { useState, useCallback } from 'react'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

const CreditCardForm = ({ formId, formSubmitted }) => {
  const [formData, setFormData] = useState({
    number: undefined,
    name: undefined,
    expiry: undefined,
    cvv: undefined
  })

  const [error, setError] = useState({})

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

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
          isValid = formData.number?.replaceAll('.', '').match(/\d{16}/g)
          break
        case 'name':
          isValid = formData.name?.match(/^[a-zA-Z]*$/g)
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
  }, [formData, setError])

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
          onValueChange={handleChange}
          hasError={error.number}
        />
        <Input
          name={'name'}
          placeholder={'Como no cartão'}
          label={'Nome do Titular:'}
          onValueChange={handleChange}
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
            onValueChange={handleChange}
            hasError={error.expiry}
          />
          <Input
            name={'cvv'}
            onlyNumbers
            placeholder={'___'}
            maskPattern={'###'}
            label={'CVV:'}
            onValueChange={handleChange}
            hasError={error.cvv}
          />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

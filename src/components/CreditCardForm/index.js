import React, { useState, useEffect } from 'react'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

const CreditCardForm = ({ formId, formSubmitted }) => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmitted()
  }

  return (
    <Card>
      <Form id={formId} onSubmit={handleSubmit}>
        <Input
          name={'number'}
          onlyNumbers
          placeholder={'____.____.____.____'}
          maskPattern={'#### #### #### ####'}
          maskDivider={' '}
          label={'Número do cartão:'}
          onValueChange={handleChange}
        />
        <Input
          name={'name'}
          placeholder={'Como no cartão'}
          label={'Nome do Titular:'}
          onValueChange={handleChange}
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
          />
          <Input
            name={'cvv'}
            onlyNumbers
            placeholder={'___'}
            maskPattern={'###'}
            label={'CVV:'}
            onValueChange={handleChange}
          />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

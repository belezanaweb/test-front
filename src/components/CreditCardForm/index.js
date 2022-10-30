import React, { useState, useEffect } from 'react'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmitted()
  }

  useEffect(() => {
    console.log('formData', formData)
  }, [formData])

  const handleChange = (e) => {
    e.preventDefault()
    console.log('formData', e.target.name)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Card>
      <Form id={formId} onSubmit={handleSubmit}>
        <Input name={'number'} label={'Número do cartão:'} onChange={handleChange} />
        <Input name={'name'} label={'Nome do Titular:'} onChange={handleChange} />
        <Warper>
          <Input name={'expiry'} label={'Validade (mês/ano):'} onChange={handleChange} />
          <Input name={'cvv'} label={'CVV:'} onChange={handleChange} />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

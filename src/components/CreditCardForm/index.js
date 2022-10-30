import React, { useState, useEffect } from 'react'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

const CreditCardForm = ({ formId, formSubmitted }) => {
  const [formData, setFormData] = useState({
    number: '____.____.____.____',
    name: undefined,
    expiry: undefined,
    cvv: undefined
  })

  useEffect(() => {
    console.log('formData', formData)
  }, [formData])

  const handleChange = (e) => {
    e.preventDefault()

    // // console.log('formData', e.target.name)
    // setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // const validateField = (field, val) => {
  //   switch (field) {
  //     case 'number' :
  //       if(val.match('[\d| ]{16,22}'))
  //       break
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmitted()
  }

  return (
    <Card>
      <Form id={formId} onSubmit={handleSubmit}>
        <Input
          name={'number'}
          placeholder={'____.____.____.____'}
          maskPattern={'#### #### #### ####'}
          maskDivider={' '}
          label={'Número do cartão:'}
          onChange={handleChange}
        />
        <Input
          name={'name'}
          placeholder={'Como no cartão'}
          label={'Nome do Titular:'}
          onChange={handleChange}
        />
        <Warper>
          <Input
            name={'expiry'}
            placeholder={'__/____'}
            maskPattern={'##/####'}
            maskDivider={'/'}
            label={'Validade (mês/ano):'}
            onChange={handleChange}
          />
          <Input
            name={'cvv'}
            placeholder={'___'}
            maskPattern={'###'}
            label={'CVV:'}
            onChange={handleChange}
          />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

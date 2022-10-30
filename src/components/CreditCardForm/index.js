import React from 'react'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

const CreditCardForm = ({ formId, formSubmitted }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmitted()
    console.log('e ####', e)
  }

  return (
    <Card>
      <Form id={formId} onSubmit={handleSubmit}>
        <Input label={'Número do cartão:'} />
        <Input label={'Nome do Titular:'} />
        <Warper>
          <Input label={'Validade (mês/ano):'} />
          <Input label={'CVV:'} />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

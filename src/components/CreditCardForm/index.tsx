import React from 'react'

import { useCreditCard } from '../../hooks/creditCard'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

interface Props {
  formId: string
  formSubmitted: () => void
}

const CreditCardForm: React.FC<Props> = ({ formId, formSubmitted }) => {

  const { error } = useCreditCard()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault()
    formSubmitted()
  }

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
          errorLabel={'Número do cartão inválido'}
          hasError={error.number}
        />
        <Input
          name={'name'}
          placeholder={'Como no cartão'}
          label={'Nome do Titular:'}
          errorLabel={'Nome de titular inválido'}
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
            errorLabel={'Data inválida'}
            hasError={error.expiry}
          />
          <Input
            name={'cvv'}
            onlyNumbers
            placeholder={'___'}
            maskPattern={'###'}
            label={'CVV:'}
            errorLabel={'CVV inválido'}
            hasError={error.cvv}
          />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm

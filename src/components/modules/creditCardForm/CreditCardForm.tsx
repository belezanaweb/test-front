import React from 'react'

import Card from '../../elements/card/Card'
import FormControl from '../formControl/FormControl'

import { StyledRow } from './CreditCardForm.styled'

function CreditCardForm(): JSX.Element {
  return (
    <Card>
      <FormControl
        name="number"
        label="Número do cartão"
        placeholder="____.____.____.____"
        mask="9999.9999.9999.9999"
      />
      <FormControl name="name" label="Nome do titular" placeholder="Como no cartão" />
      <StyledRow>
        <FormControl
          name="expirationDate"
          label="Número do cartão"
          placeholder="__/____"
          mask="99/9999"
        />
        <FormControl name="cvv" label="Nome do titular" placeholder="___" mask="999" />
      </StyledRow>
    </Card>
  )
}

export default CreditCardForm

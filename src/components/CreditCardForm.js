import React from 'react';

import { Container, Form, FormGroup, FormGroupFlex, Label, FormField } from '../styles/CreditCardForm';

function CreditCardForm(){

  return(
    <Container>
      <Form>
        <FormGroup>
          <Label htmlFor="card-number">Número do cartão:</Label>
          <FormField name="card-number" type="number" required placeholder="____.____.____.____"/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="name">Nome do Titular:</Label>
          <FormField name="name" required placeholder="Como no cartão" />
        </FormGroup>

          <FormGroupFlex>
              <FormGroup>
                <Label htmlFor="date">Validade (mês/ano):</Label>
                <FormField name="date" required placeholder="__/____"/>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="cvv">CVV:</Label>
                <FormField name="cvv" required placeholder="___" />
              </FormGroup>
          </FormGroupFlex>
      </Form>
    </Container>
  )
}

export default CreditCardForm;
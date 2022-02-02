import React from 'react'
import { Input } from './Input'
import styled from 'styled-components'

/**
 *  Function to render default card
 *  @property {vector[]} products - vector of products
 */

export default function FormCreditCard({ products }) {
  return (
    <div>
      <Input
        labelText="Número do cartão:"
        placeholder="____.____.____.____"
        id="cardnumber"
        type="text"
        pattern="[\d| ]{16,22}"
      />
      <Input labelText="Nome do Titular:" placeholder="Como no cartão" />
      <Container>
        <Input labelText="Validade (mês/ano):" placeholder="__/____" />
        <Input labelText="CVV:" placeholder="___" />
      </Container>
    </div>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

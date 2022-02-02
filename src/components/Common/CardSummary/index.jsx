import React from 'react'
import { Container, BoxText, Text } from './styles'

/**
 *  Function to render summary card
 *  @property {number} price - price of the products
 *  @property {number} shipping - price of the shipping
 *  @property {number} discount - price of the discount
 *  @property {number} total - price of the total
 */

export default function CardSummary({ price, shipping, discount, total }) {
  return (
    <Container>
      <BoxText className="product">
        <Text>PRODUTOS</Text>
        <Text>{price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
      </BoxText>

      <BoxText className="shipping">
        <Text>FRETE</Text>
        <Text>{shipping?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
      </BoxText>

      <BoxText className="discount">
        <Text className="discountColor">DESCONTO</Text>
        <Text className="discountColor">
          {discount > 0
            ? '- ' + discount?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            : discount?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </Text>
      </BoxText>

      <BoxText>
        <Text className="total">TOTAL</Text>
        <Text className="total">
          {total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </Text>
      </BoxText>
    </Container>
  )
}

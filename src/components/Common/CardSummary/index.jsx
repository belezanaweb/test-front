import React from 'react'
import { Container, BoxText, Text } from './styles'

/**
 *  Function to render summary card
 *  @property {number} price - price of the products
 *  @property {number} shipping - price of the shipping
 *  @property {number} discount - price of the discount
 *  @property {number} total - price of the total
 */

export default function CardSummary({ price = 0, shipping = 0, discount = 0, total = 0 }) {
  const formatPrice = (price) => {
    return price?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const valueTotal = price + shipping - discount

  return (
    <Container>
      <BoxText className="product">
        <Text>PRODUTOS</Text>
        <Text>{formatPrice(price)}</Text>
      </BoxText>

      <BoxText className="shipping">
        <Text>FRETE</Text>
        <Text>{formatPrice(shipping)}</Text>
      </BoxText>

      <BoxText className="discount">
        <Text className="discountColor">DESCONTO</Text>
        <Text className="discountColor">
          {discount > 0 ? '- ' + formatPrice(discount) : formatPrice(discount)}
        </Text>
      </BoxText>

      <BoxText>
        <Text className="total">TOTAL</Text>
        <Text className="total">{formatPrice(valueTotal)}</Text>
      </BoxText>
    </Container>
  )
}

import React from 'react'
import { Container, BoxText, Text } from './styles'
import { useRequestContext } from '../../../context/useRequestContext'

/**
 *  Function to render summary card
 */

export default function CardSummary() {
  const { order } = useRequestContext()
  const { subTotal, shippingTotal, discount } = order

  const formatPrice = (price) => {
    return price?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const valueTotal = subTotal + shippingTotal - discount

  return (
    <Container>
      <BoxText className="product">
        <Text>PRODUTOS</Text>
        <Text>{formatPrice(subTotal)}</Text>
      </BoxText>

      <BoxText className="shipping">
        <Text>FRETE</Text>
        <Text>{formatPrice(shippingTotal)}</Text>
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

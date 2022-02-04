import React from 'react'
import { Container, BoxText, Text } from './styles'
import { useRequestContext } from '../../../context/useRequestContext'
import { useLocation } from 'react-router-dom'

/**
 *  Function to render summary card
 */

export default function CardSummary() {
  const { order } = useRequestContext()
  const orderStorage = JSON.parse(localStorage.getItem('gb:order'))
  const screenPayment = useLocation()

  let productsOrder = {}

  if (orderStorage) {
    productsOrder = orderStorage
  } else {
    productsOrder = order
  }

  const { subTotal, shippingTotal, discount } = productsOrder

  // function to format price
  const formatPrice = (price) => {
    return price?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  // total price - total order value get from API is wrong
  const valueTotal = subTotal + shippingTotal - discount

  return (
    <Container screenPayment={!!screenPayment.pathname.slice(1)}>
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

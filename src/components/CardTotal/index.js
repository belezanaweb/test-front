/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
//formats
import { formatPrice } from '../../utils/formats'

import { Container, WrapperItem } from './styles'

const CardTotal = ({ discount, shipping, subtotal }) => {
  // callback function that returns purchase data.
  const getTotal = useCallback(() => {
    return subtotal + shipping - discount
  }, [])

  return (
    <Container>
      <WrapperItem>
        <p>Produtos</p>
        <p>{formatPrice(subtotal)}</p>
      </WrapperItem>
      <WrapperItem>
        <p>Frete</p>
        <p>{formatPrice(shipping)}</p>
      </WrapperItem>
      <WrapperItem>
        <p className="discount">Desconto</p>
        <p className="discount">
          {discount > 0 ? `- ${formatPrice(discount)}` : formatPrice(discount)}
        </p>
      </WrapperItem>
      <WrapperItem>
        <p className="total">Total</p>
        <p className="total">{formatPrice(getTotal())}</p>
      </WrapperItem>
    </Container>
  )
}

export default CardTotal

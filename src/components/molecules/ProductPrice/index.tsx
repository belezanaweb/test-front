import React from 'react'

import { useCheckout } from '../../../providers/checkout'
import { PriceCard } from './styles'
import Text from '../../atoms/Text'
import Price from '../../atoms/Price'

function ProductPrice() {
  const { productData } = useCheckout()

  return (
    <PriceCard>
      <div>
        <Text type="text">Produtos</Text>
        <Price>R$ {productData.subTotal.toString()}</Price>
      </div>
      <div>
        <Text type="text">Frete</Text>
        <Price>R$ {productData.shippingTotal.toString()}</Price>
      </div>
      <div>
        <Text type="text">Desconto</Text>
        <Price>R$ {productData.discount.toString()}</Price>
      </div>
      <div>
        <Text type="text">Total</Text>
        <Price>R$ {productData.total.toString()}</Price>
      </div>
    </PriceCard>
  )
}

export default ProductPrice

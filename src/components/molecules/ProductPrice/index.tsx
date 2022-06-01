import React from 'react'

import { PriceCard } from './styles'
import Text from '../../atoms/Text'
import Price from '../../atoms/Price'

function ProductPrice() {
  return (
    <PriceCard>
      <div>
        <Text type="text">Produtos</Text>
        <Price>R$ 00</Price>
      </div>
      <div>
        <Text type="text">Produtos</Text>
        <Price>R$ 00</Price>
      </div>
      <div>
        <Text type="text">Produtos</Text>
        <Price>R$ 00</Price>
      </div>
    </PriceCard>
  )
}

export default ProductPrice

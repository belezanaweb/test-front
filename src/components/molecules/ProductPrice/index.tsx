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
        <Price>
          {productData.subTotal
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })
            .toString()}
        </Price>
      </div>
      <div>
        <Text type="text">Frete</Text>
        <Price>
          {productData.shippingTotal
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })
            .toString()}
        </Price>
      </div>
      <div>
        <Text type="discount">Desconto</Text>
        <Price type="discount">
          {productData.discount
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })
            .toString()}
        </Price>
      </div>
      <div>
        <Text type="total">Total</Text>
        <Price type="total">
          {productData.total
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })
            .toString()}
        </Price>
      </div>
    </PriceCard>
  )
}

export default ProductPrice

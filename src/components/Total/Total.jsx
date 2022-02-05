import React from 'react'
import * as CSS from './style'
import * as Global from '../../assets/styles/global'
import { useBasketContext } from '../../context/Basket'
import { formatToBRL } from '../../utils/currencyHelper'

export default function Total(props) {
  const basket = useBasketContext()
  console.log(basket)
  const { subTotal, shippingTotal, discount, total } = basket.amounts
  return (
    <Global.Wrapper>
      <CSS.Box>
        <CSS.Row>
          <p>Produtos</p>
          <p>{formatToBRL(subTotal)}</p>
        </CSS.Row>
        <CSS.Row>
          <p>Frete</p>
          <p>{formatToBRL(shippingTotal)}</p>
        </CSS.Row>
        <CSS.Row discount>
          <p>Desconto</p>
          <p>{'-  ' + formatToBRL(discount)}</p>
        </CSS.Row>
        <CSS.Row bold total>
          <p>Total</p>
          <p>{formatToBRL(total)}</p>
        </CSS.Row>
      </CSS.Box>
    </Global.Wrapper>
  )
}

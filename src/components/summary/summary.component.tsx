import { useCheckoutContext } from 'context/checkout.context'
import { formatMoney } from 'helpers'
import React, { FC } from 'react'
import { SummaryStyled } from './summary.style'

export const Summary: FC<{ children?: never }> = () => {
  const { subTotal, shippingTotal, discount, total } = useCheckoutContext()
  return (
    <SummaryStyled>
      <div className="item">
        <p>Produtos</p>
        <p>{formatMoney(subTotal)}</p>
      </div>
      <div className="item">
        <p>Frete</p>
        <p>{formatMoney(shippingTotal)}</p>
      </div>
      <div className="item accent">
        <p>Desconto</p>
        <p>{formatMoney(-discount)}</p>
      </div>
      <div className="item bold margin">
        <p>Total</p>
        <p>{formatMoney(total)}</p>
      </div>
    </SummaryStyled>
  )
}

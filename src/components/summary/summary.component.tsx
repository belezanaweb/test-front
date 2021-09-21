import { formatMoney } from 'helpers'
import React, { FC } from 'react'
import { SummaryStyled } from './summary.style'

export const Summary: FC<{ children?: never }> = () => {
  return (
    <SummaryStyled>
      <div className="item">
        <p>Produtos</p>
        <p>{formatMoney(624.8)}</p>
      </div>
      <div className="item">
        <p>Frete</p>
        <p>{formatMoney(5.3)}</p>
      </div>
      <div className="item accent">
        <p>Desconto</p>
        <p>{formatMoney(-30)}</p>
      </div>
      <div className="item bold margin">
        <p>Total</p>
        <p>{formatMoney(600.1)}</p>
      </div>
    </SummaryStyled>
  )
}

import React, { FC } from 'react'
import { SummaryStyled } from './summary.style'
import Skeleton from 'react-loading-skeleton'

export const SummarySkeleton: FC<{ children?: never }> = () => {
  return (
    <SummaryStyled>
      <div className="item">
        <p>Produtos</p>
        <p><Skeleton /></p>
      </div>
      <div className="item">
        <p>Frete</p>
        <p><Skeleton /></p>
      </div>
      <div className="item accent">
        <p>Desconto</p>
        <p><Skeleton /></p>
      </div>
      <div className="item bold margin">
        <p>Total</p>
        <p><Skeleton /></p>
      </div>
    </SummaryStyled>
  )
}

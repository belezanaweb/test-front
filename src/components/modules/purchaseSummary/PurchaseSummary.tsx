import React, { useContext } from 'react'

import { PurchaseContext } from '../../../contexts/PurchaseContext'

import { formatCurrencyBRL } from '../../../utils/format.utils'

import { StyledPurchaseSummary } from './PurchaseSummary.styled'

function PurchaseSummary(): JSX.Element {
  const { subTotal, shipingTotal, discount, total } = useContext(PurchaseContext)

  return (
    <StyledPurchaseSummary>
      <tbody>
        <tr>
          <td>Produtos</td>
          <td align="right">{formatCurrencyBRL(subTotal ?? 0)}</td>
        </tr>
        <tr>
          <td>Frete</td>
          <td align="right">{formatCurrencyBRL(shipingTotal ?? 0)}</td>
        </tr>
        <tr className="highlight">
          <td>Desconto</td>
          <td align="right">{formatCurrencyBRL(discount ?? 0)}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th align="left">Total</th>
          <th align="right">{formatCurrencyBRL(total ?? 0)}</th>
        </tr>
      </tfoot>
    </StyledPurchaseSummary>
  )
}

export default PurchaseSummary

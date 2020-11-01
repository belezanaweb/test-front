import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../store/CartStore'
import {
  PurchaseSummaryWrapper,
  PurchaseSummaryList,
  PurchaseSummaryTerm,
  PurchaseSummaryDefinition,
  PurchaseSummaryDiscountList,
  PurchaseSummaryTotalList
} from './PurchaseSummary.styles'
import { Value } from '../Value/Value'

export const PurchaseSummary = () => {
  const cartContext = useContext(CartContext)
  const [summary, setSummary] = useState({})

  useEffect(() => {
    /* istanbul ignore else */
    if (cartContext.state.items) {
      const { subTotal, shippingTotal, discount, total } = cartContext.state

      setSummary({
        subTotal,
        shippingTotal,
        discount,
        total
      })
    }
  }, [cartContext])

  return (
    <PurchaseSummaryWrapper>
      <PurchaseSummaryList>
        <PurchaseSummaryTerm>Produtos</PurchaseSummaryTerm>
        <PurchaseSummaryDefinition>
          <Value>{summary.subTotal}</Value>
        </PurchaseSummaryDefinition>
      </PurchaseSummaryList>
      <PurchaseSummaryList>
        <PurchaseSummaryTerm>Frete</PurchaseSummaryTerm>
        <PurchaseSummaryDefinition>
          <Value>{summary.shippingTotal}</Value>
        </PurchaseSummaryDefinition>
      </PurchaseSummaryList>
      <PurchaseSummaryDiscountList>
        <PurchaseSummaryTerm>Desconto</PurchaseSummaryTerm>
        <PurchaseSummaryDefinition>
          &minus; <Value>{summary.discount}</Value>
        </PurchaseSummaryDefinition>
      </PurchaseSummaryDiscountList>
      <PurchaseSummaryTotalList>
        <PurchaseSummaryTerm>Total</PurchaseSummaryTerm>
        <PurchaseSummaryDefinition>
          <Value>{summary.total}</Value>
        </PurchaseSummaryDefinition>
      </PurchaseSummaryTotalList>
    </PurchaseSummaryWrapper>
  )
}

import React from 'react'

import { SummaryContainer, SummaryItem, SummaryText, SummaryTextBold } from './Summary.elements'

import { useFetch } from '../../contexts/useFetch'

export default function Summary() {
  const { summary } = useFetch()

  return (
    <section>
      <SummaryContainer>
        <SummaryItem>
          <SummaryText>PRODUTOS</SummaryText>
          <SummaryText>{summary.subTotal}</SummaryText>
        </SummaryItem>
        <SummaryItem>
          <SummaryText>FRETE</SummaryText>
          <SummaryText>{summary.shippingTotal}</SummaryText>
        </SummaryItem>
        <SummaryItem>
          <SummaryText discount>DESCONTO</SummaryText>
          <SummaryText discount> - {summary.discount}</SummaryText>
        </SummaryItem>
        <SummaryItem>
          <SummaryTextBold>TOTAL</SummaryTextBold>
          <SummaryTextBold>{summary.total}</SummaryTextBold>
        </SummaryItem>
      </SummaryContainer>
    </section>
  )
}

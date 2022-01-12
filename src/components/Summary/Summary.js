import React from 'react'
import { SummaryContainer, SummaryItem, SummaryText, SummaryTextBold } from './Summary.elements'

export default function Summary() {
  return (
    <section>
      <SummaryContainer>
        <SummaryItem>
          <SummaryText>PRODUTOS</SummaryText>
          <SummaryText>R$ 624,80</SummaryText>
        </SummaryItem>
        <SummaryItem>
          <SummaryText>FRETE</SummaryText>
          <SummaryText>R$ 624,80</SummaryText>
        </SummaryItem>
        <SummaryItem>
          <SummaryText discount>DESCONTO</SummaryText>
          <SummaryText discount>R$ 624,80</SummaryText>
        </SummaryItem>
        <SummaryItem>
          <SummaryTextBold>TOTAL</SummaryTextBold>
          <SummaryTextBold>R$ 624,80</SummaryTextBold>
        </SummaryItem>
      </SummaryContainer>
    </section>
  )
}

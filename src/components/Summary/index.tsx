import { ReactNode } from 'react'

import { CurrencyText } from '../Typography/CurrencyText'

import { TextBody } from '../Typography/styles'
import { SummaryContainer, SummaryRow } from './styles'

interface SummaryProps {
  children?: ReactNode;
  summary: SummaryBilling;
}

export interface SummaryBilling {
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
  totalItems: number;
}

export function Summary({ children, summary }: SummaryProps) {
  return (
    <SummaryContainer>
      <SummaryRow>
        <TextBody aria-label="Total items">Produtos: ({summary.totalItems} itens)</TextBody>
        <CurrencyText value={summary.subTotal} aria-label="Total value" />
      </SummaryRow>
      <SummaryRow>
        <TextBody fontFamily="secondary" aria-label="Shipping">
          Frete:
        </TextBody>
        <CurrencyText
          value={summary.shippingTotal}
          fontFamily="secondary"
          aria-label="Shipping value"
        />
      </SummaryRow>
      <SummaryRow>
        <TextBody fontFamily="secondary" aria-label="Discount">
          Desconto:
        </TextBody>
        <CurrencyText
          value={summary.discount}
          color="primary"
          fontWeight={700}
          fontFamily="secondary"
          aria-label="Discount value"
        />
      </SummaryRow>
      <SummaryRow>
        <TextBody fontWeight={700} size="medium" fontFamily="secondary" aria-label="Subtotal">
          Subtotal
        </TextBody>
        <CurrencyText
          value={summary.total}
          fontWeight={700}
          size="medium"
          fontFamily="secondary"
          aria-label="Subtotal value"
        />
      </SummaryRow>
      {children}
    </SummaryContainer>
  )
}

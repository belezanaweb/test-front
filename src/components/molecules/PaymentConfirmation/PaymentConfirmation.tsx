import React from 'react'
import { Paper } from '../../atoms'
import { ConfirmationDataParagraph, Container } from './PaymentConfirmation.style'

interface PaymentConfirmationProps {
  cardNumber: string | undefined
  cardName: string
  date: string
}

export const PaymentConfirmation = ({ cardNumber, cardName, date }: PaymentConfirmationProps) => (
  <Container>
    <Paper title="pagamento">
      <ConfirmationDataParagraph>{cardNumber}</ConfirmationDataParagraph>
      <ConfirmationDataParagraph>{cardName}</ConfirmationDataParagraph>
      <ConfirmationDataParagraph>{date}</ConfirmationDataParagraph>
    </Paper>
  </Container>
)

import { PaymentInfo, SuccessDialog, Card, Products, Summary, Title } from 'components'
import React, { FC } from 'react'

export const Confirm: FC<{ children?: never }> = () => {
  return (
    <>
      <SuccessDialog />
      <Title as="h3">Pagamento</Title>
      <PaymentInfo />
      <Title as="h3">Produtos</Title>
      <Products />
      <Summary />
    </>
  )
}

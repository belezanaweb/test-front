import { SuccessDialog, Card, Products, Summary, Title } from 'components'
import React, { FC } from 'react'

export const Confirm: FC<{ children?: never }> = () => {
  return (
    <>
      <SuccessDialog />
      <Title as="h3">Pagamento</Title>
      <Card>
        <p>****.****.****.1234</p>
        <p>José da Silva</p>
        <p>05/2019</p>
      </Card>
      <Title as="h3">Produtos</Title>
      <Products />
      <Summary />
    </>
  )
}

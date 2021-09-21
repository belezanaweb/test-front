import { Card, Product, Summary, Title } from 'components'
import React, { FC } from 'react'

export const Cart: FC<{ children?: never }> = () => {
  return (
    <>
      <Title>Produtos</Title>
      <Card>
        <Product
          title="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
          price={42.95}
          picture="https://via.placeholder.com/100"
        />
        <Product
          title="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
          price={42.95}
          picture="https://via.placeholder.com/100"
        />
        <Product
          title="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
          price={-42.95}
          picture="https://via.placeholder.com/100"
        />
      </Card>
      <Summary />
    </>
  )
}

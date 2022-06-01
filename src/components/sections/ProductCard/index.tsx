import React from 'react'
import Title from '../../micro/TitleCard'
import Product from '../Product'

import { Card } from './styles'

function ProductCard() {
  return (
    <section>
      <Title>Produtos</Title>
      <Card>
        <Product title="aaaaa" price="00" />
      </Card>
    </section>
  )
}

export default ProductCard

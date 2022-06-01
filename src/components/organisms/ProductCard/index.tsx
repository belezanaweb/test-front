import React from 'react'

import Card from '../../molecules/Card'

import Product from '../../molecules/Product'

function ProductCard() {
  return (
    <section>
      <Card title="Produtos">
        <Product title="aaaaa" price="00" />
        <Product title="aaaaa" price="00" />
        <Product title="aaaaa" price="00" />
      </Card>
    </section>
  )
}

export default ProductCard

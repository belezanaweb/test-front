import React from 'react'

import BLWSingleTitle from '~/components/BLWSingleTitle'

import { Producs, Container } from './styles'

const ProductCart = ({ productList }) => {
  const renderProducts = (products, index) => (
    <div className="produc" key={index}>
      <img src={products.product.imageObjects[0].small} alt="" />
      <div>
        <p className="name">{products.product.limitedName}</p>
        <p className="price">{products.product.priceSpecification.priceFormatted}</p>
      </div>
    </div>
  )

  return (
    <Container>
      <BLWSingleTitle title="Produtos" />
      <Producs>{!!productList && productList.map(renderProducts)}</Producs>
    </Container>
  )
}

export default ProductCart

import React from 'react'
import { Container, Title } from './style'
import formatValue from '../../Utils/formatValue'

const ListProductsCheckout = ({ productItems }) => {
  return (
    <>
      <Title>Produtos</Title>
      <Container>
        {productItems.map((item) => (
          <div key={item.product.sku} className="product-item">
            <img src={item.product.imageObjects[0].small} alt="" />
            <div>
              <p>{item.product.name}</p>
              <span>{formatValue(item.product.priceSpecification.price)}</span>
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}

export default ListProductsCheckout

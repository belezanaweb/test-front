import React from 'react'
import { Col, Row, Image } from 'antd'

const productContent = (items, cssClassName) => {
  const formatPrice = (price) => price.toFixed(2)

  return items.map((item) => (
    <div key={item.product.sku} className={cssClassName}>
      <Row>
        <Col>
          <Image width={65} src={item.product.imageObjects && item.product.imageObjects[0].small} />
        </Col>
        <Col>
          <Row className="productName">{item.product.name}</Row>
          <Row>
            <span className="productPrice">
              R${' '}
              {item.product.priceSpecification &&
                formatPrice(item.product.priceSpecification.price)}
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  ))
}

export default productContent

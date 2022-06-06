import React from 'react'
import { Col, Row, Image } from 'antd'

const formatPrice = (price) => price.toFixed(2)

export const productContent = (items, cssClassName) => {
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

export const totalContent = (items, cssClassName) => {
  let totalProdutos = 0
  let totalFrete = 0
  let totalDiscount = 0

  for (const item of items) {
    if (item.product.priceSpecification) {
      totalProdutos += item.product.priceSpecification.price
      totalFrete +=
        item.product.priceSpecification.originalPrice - item.product.priceSpecification.price
      totalDiscount += item.product.priceSpecification.discount
    }
  }

  return (
    <div className={cssClassName}>
      <Row>
        <Col span={12}>
          <div className="totalItem totalProduct totalItemLabel">PRODUTOS</div>
          <div className="totalItem totalItemLabel totalFrete">FRETE</div>
          <div className="totalItem totalItemLabel totalDesconto">DESCONTO</div>
          <div className="totalItem totalItemLabel totalTotal">TOTAL</div>
        </Col>
        <Col span={12}>
          <div className="totalItem totalItemValue productItemValue">
            R$ {formatPrice(totalProdutos)}
          </div>
          <div className="totalItem totalItemValue totalFrete">R$ {formatPrice(totalFrete)}</div>
          <div className="totalItem totalItemValue totalDesconto">
            - R$ {formatPrice(totalDiscount)}
          </div>
          <div className="totalItem totalItemValue totalTotal">
            R$ {formatPrice(totalProdutos - totalDiscount)}
          </div>
        </Col>
      </Row>
    </div>
  )
}

import React from 'react'
import { Col, Row, Image } from 'antd'
import {
  formatPrice,
  getImageSrc,
  getProductName,
  getProductPrice,
  getTotalValues
} from './CreateProductData'

export const productCardContent = (items, cssClassName) => {
  return items.map((item) => (
    <div key={item.product.sku} className={cssClassName}>
      <Row>
        <Col>
          <Image width={65} src={getImageSrc(item)} />
        </Col>
        <Col>
          <Row className="productName">{getProductName(item)}</Row>
          <Row>
            <span className="productPrice">R$ {getProductPrice(item)}</span>
          </Row>
        </Col>
      </Row>
    </div>
  ))
}

export const totalCardContent = (items, cssClassName) => {
  let { totalProdutos, totalFrete, totalDiscount } = getTotalValues(items)

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

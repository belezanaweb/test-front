import React from 'react'
import './Product.css'
import { convertDecimalToCurrency } from '../../utils'

const Product = (props) => {
  const thumbnail = props.product.imageObjects.find((im) => im.valid).thumbnail

  return (
    <div className="product-container">
      <img src={thumbnail} className="thumbnail" />
      <div className="details">
        <span className="name">{props.product.name}</span>
        <span className="price">
          {convertDecimalToCurrency(props.product.priceSpecification.price)}
        </span>
      </div>
    </div>
  )
}

export default Product

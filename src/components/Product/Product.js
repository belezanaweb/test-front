import React from 'react'
import './Product.css'
import { convertDecimalToCurrency } from '../../utils'

const Product = (props) => {
  const imageObject = props.product.imageObjects.find((im) => im.valid)

  return (
    <div className="product-container">
      <img
        src={imageObject.medium}
        className="thumbnail"
        alt={`Imagem do produto ${props.product.name}`}
      />
      <div className="details">
        <span className="name">{props.product.name}</span>
        {props.showPrice && (
          <span className="price">
            {convertDecimalToCurrency(props.product.priceSpecification.price)}
          </span>
        )}
      </div>
    </div>
  )
}

export default Product

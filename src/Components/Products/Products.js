import React from 'react'

import useWindowDimensions from '../../Layout/WindowDimensions'
import './Products.css'

const Products = (props) => {
  const { width } = useWindowDimensions()
  const data = props.data.product
  return (
    <div className="Products">
      <div className="Img">
        <img
          src={width < 769 ? data.imageObjects[0].thumbnail : data.imageObjects[0].large}
          alt={data.name}
        />
      </div>
      <div className="Descr">
        <div className="DescrText">{data.name}</div>
        <div className="Price">R$ {data.priceSpecification.originalPrice.toFixed(2)}</div>
      </div>
    </div>
  )
}

export default Products

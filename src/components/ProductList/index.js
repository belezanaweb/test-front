import React from 'react'

import './ProductList.scss'

import { priceFormat } from '../../utils/priceFormat'

const ProductList = (props) => {

  return (

    <div className="card">
      { props.items && props.items.map( (item, index) => (
         <div className="product-list" key={ index }>
          <div className="product-list__thumb">
            <img src={ item.product.imageObjects[0].thumbnail } alt={ item.product.name } />
          </div>
          <div className="product-list__content">
            <h3 className="product-list__title">
              { item.product.name }
            </h3>
            <span className="product-list__price">{ priceFormat( item.product.priceSpecification.price ) }</span>
          </div>
        </div>
      ))}

    </div>

  )

}

export default ProductList

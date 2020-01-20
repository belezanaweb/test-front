import React from 'react'

import { Total } from './styles'

const ProductCartInfo = ({ subTotal, shippingTotal, discount, total, classNameContainer }) => {
  return (
    <Total className={classNameContainer}>
      <div className="items">
        <p>
          Produtos <span>{subTotal}</span>
        </p>
        <p>
          Frete <span>{shippingTotal}</span>
        </p>
        <p className="discount">
          Desconto <span>{discount}</span>
        </p>
      </div>

      <p className="total">
        Total <span>{total}</span>
      </p>
    </Total>
  )
}

export default ProductCartInfo

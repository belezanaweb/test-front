import React, { useContext } from 'react'
import ProductsContext from '../../contexts/ProductsContext'
import { CartSummaryWrapper, Detail, Discount, InitialDetails, Total } from './style'

const CartSummary = () => {
  const products = useContext(ProductsContext)
  const { subTotal, shippingTotal, discount, total } = products

  return (
    <CartSummaryWrapper>
      <InitialDetails>
        <Detail>
          <label>PRODUTOS</label>
          <label>
            R$ {subTotal && subTotal
              .toFixed(2)
              .replace(".", ",")}
          </label>
        </Detail>
        <Detail>
          <label>FRETE</label>
          <label>
            R$ {shippingTotal && shippingTotal
              .toFixed(2)
              .replace(".", ",")}
          </label>
        </Detail>
        <Detail>
          <Discount>DESCONTO</Discount>
          <Discount>
            - R$ {discount && discount
              .toFixed(2)
              .replace(".", ",")}
          </Discount>
        </Detail>
      </InitialDetails>
      <Detail>
        <Total>TOTAL</Total>
        <Total>
          R$ {total && total
            .toFixed(2)
            .replace(".", ",")}
        </Total>
      </Detail>
    </CartSummaryWrapper>
  )
}

export default CartSummary
import React from 'react'
import { useBasketContext } from '../../context/Basket'
import * as CSS from './style'

export default function ProductList() {
  const basket = useBasketContext()
  console.log(basket)

  return (
    <CSS.List>
      {basket.items.map((item) => {
        const productName = item.product.name
        return (
          <CSS.Item key={item.product.sku}>
            <img src={item.product.imageObjects[0].thumbnail} alt={productName} />
            <CSS.Desc>
              <CSS.ItemLabel>{productName}</CSS.ItemLabel>
            </CSS.Desc>
          </CSS.Item>
        )
      })}
    </CSS.List>
  )
}

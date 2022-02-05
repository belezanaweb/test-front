import React from 'react'
import { useBasketContext } from '../../context/Basket'
import Product from '../Product/Product'
import * as CSS from './style'

export default function ProductList({ hidePrice }) {
  const basket = useBasketContext()

  return (
    <CSS.List>
      {basket.items.map((item) => {
        return (
          <CSS.Item key={item.product.sku}>
            <Product hidePrice={hidePrice} item={item} />
          </CSS.Item>
        )
      })}
    </CSS.List>
  )
}

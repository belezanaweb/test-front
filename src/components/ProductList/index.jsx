import React from 'react'

import ProductItem from '../ProductItem'
import { Card } from '../Card'



export default function ProductList({ items }) {

  return (
    <Card as="ul">
      {
        [...items].map((item) => (
          <ProductItem key={item.product.name} item={item}/>
        ))
      } 
    </Card>
    
  )
}

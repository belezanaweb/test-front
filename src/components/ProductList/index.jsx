import React from 'react'
import styled from '@emotion/styled'
import ProductItem from '../ProductItem'

const ProductListWrapper = styled.ul`
  background-color: #fff;  
  padding: 0.75rem;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

export default function ProductList({ items }) {

  return (
    <ProductListWrapper>
      {
        [...items].map((item) => (
          <ProductItem key={item.product.name} item={item}/>
        ))
      } 
    </ProductListWrapper>
    

  )
}

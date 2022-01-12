import React from 'react'
import {
  ProductsContainer,
  ProductsContentImg,
  ProductsContentText,
  ProductsHeaderTitle,
  ProductsItem
} from './Products.elements'

export default function Products() {
  return (
    <section>
      <ProductsHeaderTitle>PRODUTOS</ProductsHeaderTitle>
      <ProductsContainer>
        <ProductsItem>
          <ProductsContentImg />
          <ProductsContentText>
            L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
          </ProductsContentText>
          <ProductsContentText bold>R$ 225,90</ProductsContentText>
        </ProductsItem>
        <ProductsItem>
          <ProductsContentImg />
          <ProductsContentText>
            L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
          </ProductsContentText>
          <ProductsContentText bold>R$ 225,90</ProductsContentText>
        </ProductsItem>
      </ProductsContainer>
    </section>
  )
}

import React from 'react'
import { ProductItemWrapper, ProductInfo, ProductDescription, ProductImage, ProductPrice } from './style';



export default function ProductItem({ item }) {

  const image = item.product.imageObjects[0].thumbnail;
  const { name } = item.product;
  
  const price = item.product.priceSpecification.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <ProductItemWrapper>
      <ProductImage src={image} alt={name} />
       <ProductInfo>
          <ProductDescription> {name} </ProductDescription>
          <ProductPrice> {price} </ProductPrice>
       </ProductInfo>

    </ProductItemWrapper>
  )
}

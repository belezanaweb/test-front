import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../store/CartStore'
import { ProductListWrapper, ProductListSection, ProductListTitle } from './ProductList.styles'
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = ({ title = 'Produtos' }) => {
  const cartContext = useContext(CartContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    /* istanbul ignore else */
    if (cartContext.state.items) {
      setProducts(
        cartContext.state.items.map(({ product }) => ({
          productTitle: product.name,
          productPrice: product.priceSpecification.price,
          imageUrl: product.imageObjects[0].small
        }))
      )
    }
  }, [cartContext])

  return (
    <ProductListSection>
      <ProductListTitle>{title}</ProductListTitle>
      <ProductListWrapper>
        {products.map((product) => (
          <ProductCard key={product.productTitle} {...product} />
        ))}
      </ProductListWrapper>
    </ProductListSection>
  )
}

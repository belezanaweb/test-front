import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { Product } from '../Product'
import { SectionHeader } from '../SectionHeader'
import { useSelector } from 'react-redux'

export const Products = () => {
  const [chosenProducts, setChosenProducts] = useState([])
  const products = useSelector((state) => state.products.items)

  useEffect(() => {
    setChosenProducts(products)
  }, [products])

  return (
    <>
      <SectionHeader text={'Produtos'} />
      <Container>
        {!!chosenProducts?.length &&
          chosenProducts.map((product) => (
            <Product key={product.product.sku} {...product.product} />
          ))}
      </Container>
    </>
  )
}

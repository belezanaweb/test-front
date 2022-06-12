import React from 'react'
import { Container } from './styles'
import { Product } from '../Product'
import { SectionHeader } from '../SectionHeader'

export const Products = () => {
  return (
    <>
      <SectionHeader text={'Produtos'} />
      <Container>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </Container>
    </>
  )
}

import React from 'react'
import Container from '../../components/Container/Container'
import ProductList from '../../components/ProductList/ProductList'

const SuccessFeature = () => {
  return (
    <>
      <Container title="Pagamento"></Container>

      <Container title="Produtos">
        <ProductList></ProductList>
      </Container>
    </>
  )
}

export default SuccessFeature

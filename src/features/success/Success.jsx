import React from 'react'
import Container from '../../components/Container/Container'
import ProductList from '../../components/ProductList/ProductList'

import Total from '../../components/Total/Total'

const SuccessFeature = () => {
  return (
    <>
      <Container title="Pagamento"></Container>

      <Container title="Produtos">
        <ProductList hidePrice></ProductList>
      </Container>

      <Total></Total>
    </>
  )
}

export default SuccessFeature

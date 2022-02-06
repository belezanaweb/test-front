import React from 'react'
import Container from '../../components/Container/Container'
import ProductList from '../../components/ProductList/ProductList'
import Total from '../../components/Total/Total'
import success from '../../assets/images/success.png'

const SuccessFeature = () => {
  return (
    <>
      <Container transparent>
        <img src={success} alt="Pagamento realizado com sucesso" />
      </Container>

      <Container title="Pagamento"></Container>

      <Container title="Produtos">
        <ProductList hidePrice></ProductList>
      </Container>

      <Total></Total>
    </>
  )
}

export default SuccessFeature

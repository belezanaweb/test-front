import React from 'react'
import Container from '../../components/Container/Container'
import ProductList from '../../components/ProductList/ProductList'
import Total from '../../components/Total/Total'
import success from '../../assets/images/success.png'
import { useBasketContext } from '../../context/Basket'
import CreditCardInfo from '../../components/CreditCard/CreditCardInfo'

const SuccessFeature = () => {
  const paymentInfo = useBasketContext().paymentInfo

  return (
    <>
      <Container transparent>
        <img src={success} alt="Pagamento realizado com sucesso" />
      </Container>

      <Container title="Pagamento">
        <CreditCardInfo paymentInfo={paymentInfo} />
      </Container>

      <Container title="Produtos">
        <ProductList hidePrice></ProductList>
      </Container>

      <Total></Total>
    </>
  )
}

export default SuccessFeature

import React from 'react'
import Container from '../../components/Container/Container'
import ProductList from '../../components/ProductList/ProductList'
import Total from '../../components/Total/Total'

import { useBasketContext } from '../../context/Basket'
import CreditCardInfo from '../../components/CreditCard/CreditCardInfo'

import * as CSS from './style'

const SuccessFeature = () => {
  const paymentInfo = useBasketContext().paymentInfo
  if (paymentInfo && Object.entries(paymentInfo).length === 0) {
    window.location.href = '/cart'
  }

  return (
    <>
      <Container transparent>
        <ConfirmationIcon />
        <CSS.Title>Compra efetuada com sucesso</CSS.Title>
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

function ConfirmationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.51"
      height="39.51"
      viewBox="0 0 52.687 52.687"
    >
      <path
        d="M26.343,0A26.343,26.343,0,1,0,52.687,26.343,26.343,26.343,0,0,0,26.343,0Zm0,50.987A24.644,24.644,0,1,1,50.987,26.343,24.644,24.644,0,0,1,26.343,50.987Z"
        fill="#ff7800"
      />
      <path
        d="M139.53,156.337l-17.245,17.245-8.747-8.747a.85.85,0,0,0-1.2,1.2l9.348,9.348a.85.85,0,0,0,1.2,0l17.846-17.846a.85.85,0,0,0-1.2-1.2Z"
        transform="translate(-100.191 -139.517)"
        fill="#ff7800"
      />
    </svg>
  )
}

export default SuccessFeature

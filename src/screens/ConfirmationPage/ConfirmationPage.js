import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Subtitle from '../../components/Subtitle/Subtitle'
import TotalCard from '../../components/TotalCard/TotalCard'
import { PageContainer, PaymentDataContainer, TextContainer } from './styles'

const ConfirmationPage = () => {
  const [cart, setCart] = useState()
  const [paymentData, setPaymentData] = useState()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')))
    setPaymentData(JSON.parse(localStorage.getItem('paymentData')))
  }, [])

  return (
    <PageContainer>
      <Header />
      <Subtitle text="PAGAMENTO" />
      {paymentData && (
        <PaymentDataContainer>
          <TextContainer>
            <p>****.****.****.{paymentData.number.slice(15, 19)}</p>
          </TextContainer>
          <TextContainer>
            <p>{paymentData.name.toUpperCase()}</p>
          </TextContainer>
          <TextContainer>
            <p>{paymentData.date}</p>
          </TextContainer>
        </PaymentDataContainer>
      )}
      <p></p>
      <Subtitle text="PRODUTOS" />
      {cart && (
        <TotalCard
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
          total={cart.total}
        />
      )}
    </PageContainer>
  )
}

export default ConfirmationPage

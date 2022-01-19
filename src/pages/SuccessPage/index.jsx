import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { useCheckoutContext } from '../../contexts/Checkout'
import PaymentConfirmation from '../../components/PaymentConfirmation'
import CardContainer from '../../components/CardContainer'
import ProductItem from '../../components/ProductItem'
import { useNavigate } from 'react-router-dom'
import ProductList from '../../components/ProductList'
import * as S from './styled'
import Container from '../../components/Container'

const SuccessPage = () => {
  const { paymentData, products, prices, isConfirmed, isLoading } = useCheckoutContext()
  let navigate = useNavigate()
  const { cardName, cardNumber, cardDate } = paymentData
  const successPageText = {
    containerPaymentTitle: 'Pagamento',
    containerProductsTitle: 'Produtos'
  }

  const maskCreditCardNumber = (number) => {
    return '****.****.****.' + number.substring(15)
  }

  useEffect(() => {
    console.log(isConfirmed)
    if (!isConfirmed) {
      navigate(`/cart`)
    }
  }, [navigate, isConfirmed])

  return (
    isConfirmed && (
      <>
        <Navbar step={2} />
        <Container>
          {isLoading}
          {products.length > 0 && (
            <>
              <PaymentConfirmation status={'success'} />
              <CardContainer title={successPageText.containerPaymentTitle}>
                <S.PaymentConfirmationText>
                  {maskCreditCardNumber(cardNumber)}
                </S.PaymentConfirmationText>
                <S.PaymentConfirmationText>{cardName}</S.PaymentConfirmationText>
                <S.PaymentConfirmationText>{cardDate}</S.PaymentConfirmationText>
              </CardContainer>
              <CardContainer title={successPageText.containerProductsTitle}>
                {products.map((currentProduct, i) => (
                  <ProductItem key={i} product={currentProduct.product} hidePrice={true} />
                ))}
              </CardContainer>
              <div>
                <ProductList prices={prices} />
              </div>
            </>
          )}
        </Container>
      </>
    )
  )
}

export default SuccessPage

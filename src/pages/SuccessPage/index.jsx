import React from 'react'
import Navbar from '../../components/Navbar'
import { useCheckoutContext } from '../../contexts/Checkout'
import PaymentConfirmation from '../../components/PaymentConfirmation'
import CardContainer from '../../components/CardContainer'
import ProductItem from '../../components/ProductItem'

const SuccessPage = () => {
  const { paymentInfo, products } = useCheckoutContext()
  const { cardName, cardNumber, cardDate } = paymentInfo
  const successPageText = {
    containerPaymentTitle: 'Pagamento',
    containerProductsTitle: 'Produtos'
  }

  const maskCreditCardNumber = (number) => {
    return '****.****.****.' + number.substring(15)
  }

  return (
    <>
      <Navbar step={2} />
      <div>
        <PaymentConfirmation status={'success'} />
        <CardContainer title={successPageText.containerPaymentTitle}>
          <div>{maskCreditCardNumber(cardNumber)}</div>
          <div>{cardName}</div>
          <div>{cardDate}</div>
        </CardContainer>
        <CardContainer title={successPageText.containerProductsTitle}>
          {products.map((currentProduct, i) => (
            <ProductItem key={i} product={currentProduct.product} hidePrice={true} />
          ))}
        </CardContainer>
      </div>
    </>
  )
}

export default SuccessPage

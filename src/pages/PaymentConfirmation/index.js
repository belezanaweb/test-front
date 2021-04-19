import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Payment/Card'
import { Price } from '../../components/ShoppingCart/Price'
import { Products } from '../../components/ShoppingCart/Products'
import { Text } from '../../components/Text'
import success from '../../assets/images/success.png'

import { Context } from '../../services/context'

import { goToPaymentPage } from '../../router/Coordinator'

import {
  PaymentContainer,
  SuccessContainer,
  Success,
  SuccessMessage,
  CardContainer,
  PriceContainer,
  ButtonContainer
} from './styled'

const PaymentConfirmation = () => {
  const history = useHistory()
  const { card, cart, products, getProducts } = useContext(Context)
  const [paymentData, setPaymentData] = useState()
  const payment = `****.****.****.${card.cardNumber.slice(15, 19)}`

  useEffect(() => {
    getProducts()
    setPaymentData(JSON.parse(localStorage.getItem('paymentData')))

    // eslint-disable-next-line
  }, [])

  return (
    <PaymentContainer>
      <Header />
      {paymentData ? (
        <>
          <SuccessContainer>
            <Success src={success} />
            <SuccessMessage>COMPRA EFETUADA COM SUCESSO</SuccessMessage>
          </SuccessContainer>
          <Text text="PAGAMENTO" />
          <CardContainer>
            <Card cardNumber={payment} name={card.name} expirationDate={card.expirationDate} />
          </CardContainer>
        </>
      ) : (
        <ButtonContainer>
          <Button onClick={() => goToPaymentPage(history)} text="VOLTE PARA PAGAMENTOS" />
        </ButtonContainer>
      )}
      <Text text="PRODUTOS" />
      <Products products={products} />
      <PriceContainer>
        <Price
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
          total={cart.total}
        />
      </PriceContainer>
    </PaymentContainer>
  )
}

export { PaymentConfirmation }

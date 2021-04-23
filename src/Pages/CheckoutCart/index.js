import React, { useCallback, useEffect, useState } from 'react'

import api from '../../Service/api'
import ListProductsCheckout from '../../Components/ListProductsCheckout'
import InfoPaymentCheckout from '../../Components/InfoPaymentCheckout'
import ButtonCheckout from '../../Components/ButtonCheckout'
import HeaderCheckout from '../../Components/HeaderCheckout'

import { Container } from './style'
import { useHistory } from 'react-router-dom'

const CheckoutCart = () => {
  const [productItems, setProductItems] = useState([])
  const [infoPayment, setInfoPayment] = useState({})

  const history = useHistory()

  useEffect(async () => {
    const { data } = await api.get('v2/5b15c4923100004a006f3c07')
    setProductItems(data.items)

    const { subTotal, shippingTotal, discount, total } = data

    setInfoPayment({
      subTotal,
      shippingTotal,
      discount,
      total
    })
  }, [])

  const handleSubmit = useCallback(() => {
    history.push('/checkout/payment')
  }, [])

  return (
    <>
      <HeaderCheckout />
      <Container>
        <ListProductsCheckout productItems={productItems} />
        <InfoPaymentCheckout infoPayment={infoPayment} />
        <ButtonCheckout onClick={handleSubmit} type="submit">
          Seguir para o pagamento
        </ButtonCheckout>
      </Container>
    </>
  )
}

export default CheckoutCart

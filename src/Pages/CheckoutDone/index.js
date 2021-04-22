import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import api from '../../Service/api'
import { Container } from './style'
import ListProductsCheckout from '../../Components/ListProductsCheckout'
import InfoPaymentCheckout from '../../Components/InfoPaymentCheckout'

const CheckoutDone = ({ infoCart }) => {
  const [productItems, setProductItems] = useState([])
  const [infoPayment, setInfoPayment] = useState({})

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
  }, [productItems, infoPayment])

  return (
    <Container>
      <span className="message-done">Compra efetuada com sucesso</span>

      <h2 className="title-payment">Pagamento</h2>
      <div className="info-cart-user">
        <span>***.***.***.1234</span>
        <span>FELIPE KNIESS</span>
        <span>05/2019</span>
      </div>

      <ListProductsCheckout productItems={productItems} />
      <InfoPaymentCheckout infoPayment={infoPayment} />
    </Container>
  )
}

export default CheckoutDone

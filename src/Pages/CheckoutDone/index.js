import React, { useState, useEffect } from 'react'
import { BiCheckCircle } from 'react-icons/bi'

import api from '../../Service/api'
import { Container } from './style'
import ListProductsCheckout from '../../Components/ListProductsCheckout'
import InfoPaymentCheckout from '../../Components/InfoPaymentCheckout'
import HeaderCheckout from '../../Components/HeaderCheckout'

const CheckoutDone = (props) => {
  const [productItems, setProductItems] = useState([])
  const [infoPayment, setInfoPayment] = useState({})
  const [infoCart, setInfoCart] = useState({})

  useEffect(async () => {
    const { data } = await api.get('v2/5b15c4923100004a006f3c07')
    setProductItems(data.items)
    setInfoCart(props.location.state.data)
    console.log(props.location.state.data)
    console.log(infoCart)
    const { subTotal, shippingTotal, discount, total } = data

    setInfoPayment({
      subTotal,
      shippingTotal,
      discount,
      total
    })
  }, [])

  return (
    <>
      <HeaderCheckout />
      <Container>
        <span className="message-done">
          <BiCheckCircle color="#ff7800" size={40} />
          Compra efetuada com sucesso
        </span>

        <h2 className="title-payment">Pagamento</h2>
        <div className="info-cart-user">
          <span>{infoCart.numberCart}</span>
          <span>{infoCart.nameCart}</span>
          <span>{infoCart.validateCart}</span>
        </div>

        <ListProductsCheckout productItems={productItems} />
        <InfoPaymentCheckout infoPayment={infoPayment} />
      </Container>
    </>
  )
}

export default CheckoutDone

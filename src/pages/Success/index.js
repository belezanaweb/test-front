import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { CheckCircleTwoTone } from '@ant-design/icons'

//context
import { useCart } from '../../context/useCart'

//components
import Title from '../../components/Title'
import PaymentData from '../../components/PaymentData'
import ProductsList from '../../components/ProductsList'
import CardTotal from '../../components/CardTotal'

const Success = () => {
  const history = useHistory()
  const { data, paymentData } = useCart()

  const { discount, shippingTotal, subTotal, items } = data

  // If payment is not validated, return to the main page.
  useEffect(() => {
    if (!paymentData.name) {
      history.push('/')
    }
  }, [paymentData, history])

  return (
    <div className="div-container">
      <Title
        type="tytle-success"
        icon={
          <CheckCircleTwoTone
            twoToneColor="#FF7800"
            style={{ fontSize: '36px', marginBottom: '0.87rem' }}
          />
        }
      >
        Compra efetuada com sucesso
      </Title>
      <PaymentData
        name={paymentData.name}
        creditCard={paymentData.creditCard}
        expiration={paymentData.expirationDate}
      />
      <Title type="title">Produtos</Title>
      <ProductsList list={items} showPrice={false} />
      <CardTotal discount={discount} shipping={shippingTotal} subtotal={subTotal} />
    </div>
  )
}

export default Success

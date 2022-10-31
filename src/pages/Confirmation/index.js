import React from 'react'

import { useCreditCard } from '../../hooks/creditCard'
import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import ProductsList from '../../components/ProductsList'
import Total from '../../components/Total'

import Success from '../../assets/success.png'

import { Container, SuccessWarper, PaymentContainer } from './styles'

const Confirmation = () => {
  const { formData } = useCreditCard()
  const { items, totalData } = useCart()

  return (
    <div>
      <NavBar actualStep={'confirmation'} />
      <SuccessWarper>
        <img src={Success} alt={'success'} />
        <p>compra efetuada com sucesso</p>
      </SuccessWarper>
      <Container>
        <h1>pagamento</h1>
        <PaymentContainer>
          <Card>
            <p>{`**** . **** . **** . ${formData.number.substring(formData.number.length - 4)}`}</p>
            <p>{formData.name}</p>
            <p>{formData.expiry}</p>
          </Card>
        </PaymentContainer>
        <h1>produtos</h1>
        <ProductsList items={items} noPrice />
        <Total
          subTotal={totalData.subTotal}
          shipping={totalData.shippingTotal}
          discount={totalData.discount}
          total={totalData.total}
        />
      </Container>
    </div>
  )
}

export default Confirmation

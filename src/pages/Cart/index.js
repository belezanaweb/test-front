import React from 'react'

import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import ProductsList from '../../components/ProductsList'
import Total from '../../components/Total'
import Button from '../../components/Button'

import { Container } from './styles'

const Cart = () => {
  const { items, totalData } = useCart()

  return (
    <div>
      <NavBar actualStep={'sacola'} />
      <Container>
        <h1>produtos</h1>
        <ProductsList items={items} />
        <Total
          subTotal={totalData.subTotal}
          shipping={totalData.shippingTotal}
          discount={totalData.discount}
          total={totalData.total}
        />
        <Button text={'seguir para o pagamento'} />
      </Container>
    </div>
  )
}

export default Cart

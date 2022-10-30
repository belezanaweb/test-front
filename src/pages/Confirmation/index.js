import React from 'react'

import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import ProductsList from '../../components/ProductsList'
import Total from '../../components/Total'

import { Container } from './styles'

const Confirmation = () => {
  const { items, totalData } = useCart()

  return (
    <div>
      <NavBar actualStep={'sacola'} />
      <Container>
        <h1>pagamento</h1>
        <h1>produtos</h1>
        <ProductsList items={items} />
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

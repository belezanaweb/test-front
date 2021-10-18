import React from 'react'
import { useHistory } from 'react-router'

//context
import { useCart } from '../../context/useCart'

//components
import Title from '../../components/Title'
import ProductsList from '../../components/ProductsList'
import CardTotal from '../../components/CardTotal'
import Button from '../../components/Button'

const Cart = () => {
  const history = useHistory()

  // Consumes the data consumed by the api endpoint
  const { data } = useCart()

  const { discount, shippingTotal, subTotal, items } = data

  return (
    <div className="div-container">
      <Title type="title">Produtos</Title>
      <ProductsList list={items} />
      <CardTotal discount={discount} shipping={shippingTotal} subtotal={subTotal} />
      <Button onClick={() => history.push('/payment')}>Seguir para pagamento</Button>
    </div>
  )
}

export default Cart

import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../components/Context/Context'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const Cart = () => {
  const { cartProductsData } = useContext(CartContext)
  const history = useHistory()

  useEffect(() => {
    console.log(cartProductsData)
  }, [cartProductsData])

  const handleClick = () => {
    history.push('/payment')
  }

  return (
    <div data-testid="Cart">
      <Card></Card>
      <OrderSummary></OrderSummary>
      <Button text="Seguir para o pagamento" click={handleClick} />
    </div>
  )
}

export default Cart

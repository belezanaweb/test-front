import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import { createUseStyles } from 'react-jss'
import ProductList from '../../components/ProductList/ProductList'

const useStyles = createUseStyles({
  cart: {
    width: '100%'
  }
})

const Cart = () => {
  const history = useHistory()
  const classes = useStyles()

  const handleClick = () => {
    history.push('/payment')
  }

  return (
    <div className={classes.cart} data-testid="Cart">
      <ProductList listType="cartScreen"></ProductList>
      <OrderSummary />
      <Button text="Seguir para o pagamento" click={handleClick} />
    </div>
  )
}

export default Cart

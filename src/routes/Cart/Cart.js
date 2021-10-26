import React, { useEffect, useContext, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../components/Context/Context'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import CartItem from '../../components/CartItem/CartItem'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import { currencyFormatter } from '../../utils'

const Cart = () => {
  const cartContext = useContext(CartContext)
  const history = useHistory()

  const handleClick = () => {
    history.push('/payment')
  }

  const renderProductList = useMemo(() => {
    if (Object.keys(cartContext.cartProductsData).length) {
      return cartContext.cartProductsData.data.items.map((item, index) => {
        return (
          <CartItem
            name={item.product.name}
            imageSrc={item.product.imageObjects[0].small}
            price={currencyFormatter.format(item.product.priceSpecification.price)}
            key={`${item.product.name}${index}`}
          />
        )
      })
    } else {
      return (
        <div>
          <p>O carrinho está vazio.</p>
        </div>
      )
    }
  }, [cartContext])

  return (
    <div data-testid="Cart">
      <Card>{renderProductList}</Card>
      <OrderSummary></OrderSummary>
      <Button text="Seguir para o pagamento" click={handleClick} />
    </div>
  )
}

export default Cart

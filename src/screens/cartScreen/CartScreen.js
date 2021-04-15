import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import PriceCard from '../../components/PriceCard/PriceCard'
import { goToPayment } from '../../routers/Coordinator'
import ProductCard from '../../components/ProductCard/ProductCard'
import GlobalStateContext from '../../global/globalStateContext'
import { Button, CartContainer, Text } from './styled'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading'

function CartScreen() {
  const history = useHistory()
  const { cart, products, getProducts } = useContext(GlobalStateContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <CartContainer>
      <Header />
      <Text>PRODUTOS</Text>

      {cart === 0 ? (
        <Loading />
      ) : (
        <div>
          <ProductCard products={products} />
          <PriceCard
            subTotal={cart.subTotal}
            shippingTotal={cart.shippingTotal}
            discount={cart.discount}
            total={cart.total}
          />
          <Button onClick={() => goToPayment(history)}>SEGUIR PARA PAGAMENTO</Button>
        </div>
      )}
    </CartContainer>
  )
}

export default CartScreen

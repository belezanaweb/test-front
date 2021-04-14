import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import PriceCard from '../../components/PriceCard/PriceCard'
import { goToPayment } from '../../routers/Coordinator'
import ProductCard from '../../components/ProductCard/ProductCard'
import GlobalStateContext from '../../global/globalStateContext'
import { Button, Text } from './styled'
import button from '../../assets/image/button.png'

function CartScreen() {
  const history = useHistory()
  const { cart, products, getProducts } = useContext(GlobalStateContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Text>PRODUTOS</Text>

      {cart ? (
        <div>
          <ProductCard products={products} />
          <PriceCard
            subTotal={cart.subTotal}
            shippingTotal={cart.shippingTotal}
            discount={cart.discount}
            total={cart.total}
          />
          <Button src={button} onClick={() => goToPayment(history)} />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )
}

export default CartScreen

import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Price } from '../../components/ShoppingCart/Price'
import { Products } from '../../components/ShoppingCart/Products'
import { Text } from '../../components/Text'

import { goToPaymentPage } from '../../router/Coordinator'

import { Container, ProductsContainer } from './styled'
import { Context } from '../../services/context'

const ShoppingCart = () => {
  const history = useHistory()
  const { cart, products, getProducts } = useContext(Context)

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Header />
      <Text text="PRODUTOS" />
      {cart === 0 ? (
        <div>PROCESSANDO</div>
      ) : (
        <>
          <ProductsContainer>
            <Products products={products} />
          </ProductsContainer>
          <Price subTotal={cart.subTotal} shipping={cart.shippingTotal} discount={cart.discount} />
          <Button onClick={() => goToPaymentPage(history)} text="SEGUIR PARA PAGAMENTO" />
        </>
      )}
    </Container>
  )
}

export { ShoppingCart }

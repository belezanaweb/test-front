import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Button } from '../../components/Button'

import { Header } from '../../components/Header'
import { Price } from '../../components/ShoppingCart/Price'
import { Products } from '../../components/ShoppingCart/Products'
import { Container, ProductsContainer, Text } from './styled'

const ShoppingCart = () => {
  const [cart, setCart] = useState()

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((res) => {
        localStorage.setItem('cart', JSON.stringify(res.data))
        setCart(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Header />
      <Text>PRODUTOS</Text>
      <ProductsContainer>
        {cart &&
          cart.items.map((item) => {
            return (
              <Products
                key={item.product.sku}
                thumbnail={item.product.imageObjects[0].thumbnail}
                name={item.product.name}
                price={item.product.priceSpecification.price}
              />
            )
          })}
      </ProductsContainer>
      {cart && (
        <Price
          subTotal={cart.subTotal}
          shippingTotal={cart.shippingTotal}
          discount={cart.discount}
          total={cart.total}
        />
      )}
      <Button link="/pagamento" text="SEGUIR PARA PAGAMENTO" />
    </Container>
  )
}

export { ShoppingCart }

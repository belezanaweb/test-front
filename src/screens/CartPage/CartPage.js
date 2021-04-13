import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header/Header'
import NextStepButton from '../../components/NextStepButton/NextStepButton'
import ProductCard from '../../components/ProductCard/ProductCard'
import { goToPaymentPage } from '../../router/Coordinator'
import { ProductsContainer } from './styles'

const CartPage = () => {
  const history = useHistory()
  const [cart, setCart] = useState()
  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((res) => {
        console.log(res.data.items)
        setCart(res.data.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Header />
      PRODUTOS
      <ProductsContainer>
        {cart &&
          cart.map((item) => {
            return (
              <ProductCard
                key={item.product.sku}
                thumbnail={item.product.imageObjects[0].thumbnail}
                name={item.product.name}
                price={item.product.priceSpecification.price}
              />
            )
          })}
      </ProductsContainer>
      <NextStepButton text="SEGUIR PARA O PAGAMENTO" onClick={() => goToPaymentPage(history)} />
    </div>
  )
}

export default CartPage
